import { render, screen } from '@testing-library/react'

import Home from '@pages/index'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

describe('Home', () => {
  it('should render the correct title and description for SEO', () => {
    render(<Home />)

    expect(document.title).toEqual('md share')
  })

  it('should render a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Upload Markdown File/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
