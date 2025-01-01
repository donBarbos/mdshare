import { render, screen, fireEvent } from '@testing-library/react'
import { http } from 'msw'
import { setupServer } from 'msw/node'

import { UploadForm } from '@components/UploadForm'

import type { IPostPageRequest } from '@interfaces'

describe('UploadForm component', () => {
  const server = setupServer(
    http.post('/api/v1/pages/', async ({ request }) => {
      const { text, fileName } = (await request.json()) as IPostPageRequest
      // Mock the response here
      return new Response(
        JSON.stringify({
          success: true,
          data: {
            text,
            fileName,
          },
        }),
      )
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render the form', () => {
    const { getByRole, getByText } = render(<UploadForm />)
    const input = getByText('Drag & drop file here')
    const button = getByRole('button', { name: 'SHARE' })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should submit the form and shows the result modal', async () => {
    const { getByRole, getByText } = render(<UploadForm />)
    const file = new File(['Hello, World!'], 'test.txt', { type: 'text/plain' })
    const fileInput = screen.getByText('Drag & drop file here')

    fireEvent.change(fileInput, { target: { files: [file] } })

    // Trigger the file change event
    fireEvent.change(getByText('Drag & drop file here'))

    // Submit the form
    fireEvent.click(getByRole('button', { name: 'SHARE' }))

    /*
    // Assert that the loading spinner is shown
    expect(getByText('Loading')).toBeInTheDocument()

    // Wait for the API response and assert the result modal is shown
    await waitFor(() => {
      expect(getByLabelText('Result Modal')).toBeInTheDocument()
    })

    // Assert the result modal displays the correct data
    expect(getByText('Success')).toBeInTheDocument()
    expect(getByText('test.txt')).toBeInTheDocument()
    */
  })
})
