import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

export const sanitizeHTML = (html: string): string => {
  const purify = DOMPurify(new JSDOM('<!DOCTYPE html>').window)
  return purify.sanitize(html)
}
