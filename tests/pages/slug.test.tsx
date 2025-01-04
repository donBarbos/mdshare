import { render } from '@testing-library/react'

import PostPage, { getServerSideProps } from '@pages/[slug]'

import type { IPage, IHTMLPage, IGetPageResponse, IErrorResponse } from '@interfaces'

const appUrl = process.env.APP_URL

jest.mock('@giscus/react', () => ({
  execSync: jest.fn(),
}))

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/404' })),
}))

jest.mock('@components/ScrollProgressBar', () => ({
  ScrollProgressBar: () => (
    <div role="scrollbar" aria-controls="main-content">
      Mock ScrollProgressBar
    </div>
  ),
}))

describe('[slug] page', () => {
  const mockPage = {
    _id: 'uniq-a1b2c3',
    title: 'Test Page',
    author: 'John Doe',
    html: '<h2>Test Heading</h2>\n<p>This is a test page.</p>',
  } as IHTMLPage

  it('should render markdown text', () => {
    const { getByText } = render(<PostPage page={mockPage} />)
    expect(getByText('Test Heading')).toBeInTheDocument()
    expect(getByText('This is a test page.')).toBeInTheDocument()
  })

  it('should render the correct metadata', () => {
    render(<PostPage page={mockPage} />)

    const expectedTitle = `${mockPage.title} | md share`
    expect(document.title).toBe(expectedTitle)
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
      expectedTitle,
    )
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      expectedTitle,
    )
  })

  it('should handle empty HTML gracefully', () => {
    const emptyPage = { ...mockPage, html: '' }
    const { container } = render(<PostPage page={emptyPage} />)
    expect(container.querySelector('section')).toBeEmptyDOMElement()
  })

  it('should render the correct markdown styles', () => {
    const { getByRole } = render(<PostPage page={mockPage} />)
    const markdownElement = getByRole('heading')
    const style = window.getComputedStyle(markdownElement)
    expect(style.fontSize).toEqual('1.5em')
    expect(style.fontWeight).toEqual('bold')
  })

  it('should render ScrollProgressBar component', () => {
    const { getByRole } = render(<PostPage page={mockPage} />)
    const progressBar = getByRole('scrollbar')
    expect(progressBar).toBeInTheDocument()
  })
})

describe('getServerSideProps', () => {
  const mockPageFromStore = {
    _id: 'uniq-a1b2c3',
    title: 'Test Page',
    author: 'John Doe',
    text: `# Should be first title
**Should be bold.**
\`\`\`python
import time

time.now()
\`\`\`

- Should be list element.
\`\`\`unknown language
import time

time.now()
\`\`\`
`,
  } as IPage
  const mockHTMLPage = {
    _id: 'uniq-a1b2c3',
    title: 'Test Page',
    author: 'John Doe',
    html: `<h1>Should be first title</h1>
<p><strong>Should be bold.</strong></p>
<pre><code class="language-python"><span class="hljs-keyword">import</span> time

time.now()
</code></pre>
<ul>
<li>Should be list element.</li>
</ul>
<pre><code class="language-unknown">import time

time.now()
</code></pre>
`,
  } as IHTMLPage
  const originalFetch = global.fetch

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('should return notFound for failed fetch', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false }) as IErrorResponse,
    })

    const context = { query: { slug: 'test' }, res: { setHeader: jest.fn() } } as any
    const result = await getServerSideProps(context)

    expect(result).toEqual({ notFound: true })
    expect(global.fetch).toHaveBeenCalledWith(`${appUrl}/api/v1/pages/test`)
  })

  it('should return page props for successful fetch', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () =>
        ({
          success: true,
          page: mockPageFromStore,
        }) as IGetPageResponse,
    })

    const context = { query: { slug: 'test' }, res: { setHeader: jest.fn() } } as any
    const result = await getServerSideProps(context)

    expect(result).toEqual({ props: { page: mockHTMLPage } })
    expect(global.fetch).toHaveBeenCalledWith(`${appUrl}/api/v1/pages/test`)
  })
})
