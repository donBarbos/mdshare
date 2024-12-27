import Page from '@models/pageModel'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { IPage } from '@interfaces'

// Route: /api/v1/pages/{slug}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')

  // Method: GET
  if (req.method === 'GET') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      const { slug } = req.query
      const page: IPage = await Page.findById(slug).exec()

      if (page) {
        res.status(200).json({ success: true, page: page })
      } else {
        throw new Error('Page does not exist')
      }
    } catch (error) {
      res.status(404).json({ success: false, message: error.message })
    }
  }

  // Method: HEAD
  else if (req.method === 'HEAD') {
    res.status(200).end()
  }

  // Method: *
  else {
    res.setHeader('Allow', ['HEAD', 'GET'])
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
