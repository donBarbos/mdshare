import { render, screen } from '@testing-library/react'

import About from '@pages/about'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/about' })),
}))

describe('About', () => {
  it('should render the correct title and description for SEO', () => {
    render(<About />)

    expect(document.title).toEqual('about | md share')
  })

  it('should render a heading and a description', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { name: /About this site/i })
    const description = screen.getByText(/Share and Collaborate Effortlessly with/i)

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render a list of instructions', () => {
    const { getAllByRole } = render(<About />)

    const heading = getAllByRole('heading')[0]
    const instructions = getAllByRole('list')[1]

    expect(heading).toHaveTextContent('About this site')
    expect(instructions).toHaveTextContent('Open Mainpage')
    expect(instructions.querySelector('a')).toHaveAttribute('href', './')
    expect(instructions).toHaveTextContent('Upload your File.md')
    expect(instructions).toHaveTextContent('Congratulations! You got link')
  })
})
