import Page from '@models/pageModel'
import { generateUniqueSlug } from '@utils/generateUniqueSlug'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { IPage, IPostPageRequest } from '@interfaces'

// Route: /api/v1/pages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create Page
  // Method: POST
  if (req.method === 'POST') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      const { text, fileName, expireAt, isCommentable } = req.body as IPostPageRequest
      const { created, slug } = await generateUniqueSlug(req, fileName)

      if (!created) {
        const page: IPage = new Page({
          _id: slug,
          title: fileName,
          text: text,
          expireAt: expireAt,
          isCommentable: isCommentable,
        })
        await page.save()
        res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')
        res.status(201).json({ success: true, status: 'Created', slug: slug })
      } else {
        res.status(200).json({ success: true, status: 'Already exists', slug: slug })
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  // Method: HEAD
  else if (req.method === 'HEAD') {
    res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')
    res.status(200).end()
  }

  // Method: *
  else {
    res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')
    res.setHeader('Allow', ['HEAD', 'POST'])
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
