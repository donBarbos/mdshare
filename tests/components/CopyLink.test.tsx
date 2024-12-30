import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import { CopyLink } from '@components/CopyLink'

jest.mock('@public/svgs/check-solid.svg', () => {
  const MockCheckSolidSvg = () => <svg />
  MockCheckSolidSvg.displayName = 'MockCheckSolidSvg'
  return MockCheckSolidSvg
})
jest.mock('@public/svgs/copy-regular.svg', () => {
  const MockCopyRegularSvg = () => <svg />
  MockCopyRegularSvg.displayName = 'MockCopyRegularSvg'
  return MockCopyRegularSvg
})

describe('CopyLink component', () => {
  const mockLink = 'https://example.com'
  const mockId = 'copylink-id'

  it('should render input and button', () => {
    render(<CopyLink link={mockLink} id={mockId} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(input).toHaveValue(mockLink)
  })

  it('should copy the link to clipboard when button is clicked', () => {
    document.execCommand = jest.fn()

    render(<CopyLink link={mockLink} id={mockId} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })

  it('should change button to check icon after copying', async () => {
    render(<CopyLink link={mockLink} id={mockId} />)

    const button = screen.getByRole('button')

    expect(button).not.toHaveClass('active')

    fireEvent.click(button)

    expect(button).toHaveClass('active')

    await waitFor(() => expect(button).not.toHaveClass('active'), { timeout: 2500 })
  })

  it('should call the copyText function when button is clicked', async () => {
    render(<CopyLink link={mockLink} id={mockId} />)

    const button = screen.getByRole('button')
    const input = screen.getByRole('textbox') as HTMLInputElement

    const selectMock = jest.spyOn(input, 'select')
    const execCommandMock = jest.spyOn(document, 'execCommand')

    fireEvent.click(button)

    expect(selectMock).toHaveBeenCalled()
    expect(execCommandMock).toHaveBeenCalledWith('copy')
  })

  it('should display the correct link', () => {
    render(<CopyLink link={mockLink} id={mockId} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input).toHaveValue(mockLink)
  })
})
