import { render, screen } from '@testing-library/react'

import Contact from '@pages/contact'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/contact' })),
}))

describe('Contact', () => {
  /**
  it('should render the navbar item with accent color', () => {
    render(<Contact />)
  })
  */

  it('should render the correct title and description for SEO', () => {
    render(<Contact />)

    expect(document.title).toEqual('contact | md share')
  })

  it('should render a heading and subtitles', () => {
    render(<Contact />)
    const heading = screen.getByRole('heading', { name: /Contact/i, level: 1 })
    const author = screen.getByRole('heading', { name: 'donBaros – author', level: 2 })

    expect(heading).toBeInTheDocument()
    expect(author).toBeInTheDocument()
  })

  it('should render the correct contact information', () => {
    render(<Contact />)
    const email = screen.getByText(/donbarbos@proton.me/i)
    const site = screen.getByText(/donbarbos.me/i)
    const github = screen.getAllByText(/@donBarbos/i)[0]
    const sourceCodeLink = screen.getByText(/open source/i)

    expect(email).toBeInTheDocument()
    expect(site).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(sourceCodeLink).toBeInTheDocument()
  })
})
