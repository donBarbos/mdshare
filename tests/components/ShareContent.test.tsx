import { render, screen, fireEvent } from '@testing-library/react'

import { ShareContent } from '@components/ShareContent'

const appUrl = process.env.APP_URL

global.document.execCommand = jest.fn()

jest.mock('@public/svgs/facebook.svg', () => {
  const MockFacebookSvg = () => <svg />
  MockFacebookSvg.displayName = 'MockFacebookSvg'
  return MockFacebookSvg
})

jest.mock('@public/svgs/linkedin.svg', () => {
  const MockLinkedinSvg = () => <svg />
  MockLinkedinSvg.displayName = 'MockLinkedinSvg'
  return MockLinkedinSvg
})

jest.mock('@public/svgs/twitter.svg', () => {
  const MockTwitterSvg = () => <svg />
  MockTwitterSvg.displayName = 'MockTwitterSvg'
  return MockTwitterSvg
})

jest.mock('@public/svgs/instagram.svg', () => {
  const MockInstagramSvg = () => <svg />
  MockInstagramSvg.displayName = 'MockInstagramSvg'
  return MockInstagramSvg
})

jest.mock('@public/svgs/telegram.svg', () => {
  const MockTelegramSvg = () => <svg />
  MockTelegramSvg.displayName = 'MockTelegramSvg'
  return MockTelegramSvg
})

jest.mock('@public/svgs/whatsapp.svg', () => {
  const MockWhatsappSvg = () => <svg />
  MockWhatsappSvg.displayName = 'MockWhatsappSvg'
  return MockWhatsappSvg
})

jest.mock('@public/svgs/envelope-solid.svg', () => {
  const MockEnvelopeSolidSvg = () => <svg />
  MockEnvelopeSolidSvg.displayName = 'MockEnvelopeSolidSvg'
  return MockEnvelopeSolidSvg
})

describe('ShareContent component', () => {
  const slug = 'test-slug'
  const fullLink = `${appUrl}/${slug}`

  it('should render social media buttons with correct links', () => {
    render(<ShareContent slug={slug} />)

    const facebookLink = screen.getByTitle('Share link via Facebook')
    const twitterLink = screen.getByTitle('Share link via Twitter')
    const linkedinLink = screen.getByTitle('Share link via LinkedIn')
    const instagramLink = screen.getByTitle('Share link via Instagram')

    expect(facebookLink).toHaveAttribute(
      'href',
      `https://www.facebook.com/sharer/sharer.php?u=${fullLink}`,
    )
    expect(twitterLink).toHaveAttribute('href', `https://twitter.com/intent/tweet?text=${fullLink}`)
    expect(linkedinLink).toHaveAttribute(
      'href',
      `https://www.linkedin.com/sharing/share-offsite/?url=${fullLink}`,
    )
    expect(instagramLink).toHaveAttribute('href', `https://www.instagram.com/?url=${fullLink}`)
  })

  it('should render CopyLink component with correct link', () => {
    render(<ShareContent slug={slug} />)

    const copyLinkInput = screen.getByRole('textbox')
    expect(copyLinkInput).toHaveValue(fullLink)
  })

  it('should render "Open Link in New Tab" button with correct link', () => {
    render(<ShareContent slug={slug} />)

    const openLinkButton = screen.getByTitle('Open Link in New Tab')
    expect(openLinkButton).toHaveAttribute('href', fullLink)
  })

  it('should render all social media icons', () => {
    render(<ShareContent slug={slug} />)

    const facebookIcon = screen.getByTitle('Share link via Facebook')
    const twitterIcon = screen.getByTitle('Share link via Twitter')
    const linkedinIcon = screen.getByTitle('Share link via LinkedIn')
    const instagramIcon = screen.getByTitle('Share link via Instagram')

    expect(facebookIcon).toBeInTheDocument()
    expect(twitterIcon).toBeInTheDocument()
    expect(linkedinIcon).toBeInTheDocument()
    expect(instagramIcon).toBeInTheDocument()
  })

  it('should call CopyLink component correctly when clicked', async () => {
    render(<ShareContent slug={slug} />)

    const copyButton = screen.getByRole('button')

    fireEvent.click(copyButton)

    const copyLinkComponent = screen.getByRole('textbox')
    expect(copyLinkComponent).toHaveValue(fullLink)
  })
})
