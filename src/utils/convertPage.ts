import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import markdownit from 'markdown-it'
import hljs from 'highlight.js'

import type { IPage, IHTMLPage } from '@interfaces'

function sanitizeHTML(html: string): string {
  const purify = DOMPurify(new JSDOM('<!DOCTYPE html>').window)
  return purify.sanitize(html)
}

export function convertPageToHTML(page: IPage): IHTMLPage {
  const { text, ...rest } = page

  const md = markdownit({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang }).value || ''
      }

      return ''
    },
  })

  return {
    ...rest,
    html: sanitizeHTML(md.render(text)),
  }
}
