import { render, fireEvent } from '@testing-library/react'

import { Header } from '@components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/' })),
}))

jest.mock('@components/Navbar', () => ({
  Navbar: () => <nav role="navigation">Mock Navbar</nav>,
}))

describe('Header component', () => {
  it('should render Navbar component', () => {
    const { getByRole } = render(<Header />)
    const navbar = getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })

  it('should add "hidden" class when scrolling down', () => {
    const { getByRole } = render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    const header = getByRole('banner')
    expect(header).toHaveClass('hidden')
  })

  it('should not add "hidden" class when scrolling up', () => {
    const { getByRole } = render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    fireEvent.scroll(window, { target: { scrollY: 50 } })

    const header = getByRole('banner')
    expect(header).not.toHaveClass('hidden')
  })

  it('should add "hidden" class when scrollY > 50 and scroll down', () => {
    const { getByRole } = render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 60 } })

    const header = getByRole('banner')
    expect(header).toHaveClass('hidden')
  })

  it('should remove "hidden" class when scrollY < 50 or scroll up', () => {
    const { getByRole } = render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    fireEvent.scroll(window, { target: { scrollY: 40 } })

    const header = getByRole('banner')
    expect(header).not.toHaveClass('hidden')
  })
})
