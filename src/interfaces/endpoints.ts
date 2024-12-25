import { Document } from 'mongoose'

// Page
export interface IPage extends Document {
  _id: string // a.k.a. `slug`
  title?: string
  author?: string
  text: string
}

// Processed Page
export interface IHTMLPage {
  _id: string // a.k.a. `slug`
  title?: string
  author?: string
  html: string
}

// Success Response from GET:/api/v1/pages/
export interface IGetPagesResponse {
  success: true
  pages: IPage[]
}

// Success Response from GET:/api/v1/pages/:id
export interface IGetPageResponse {
  success: true
  page: IPage
}

// Request to POST:/api/v1/pages/
export interface IPostPageRequest {
  text: string
  fileName: string
}

// Success Response from POST:/api/v1/pages/
export interface IPostPageResponse {
  success: true
  status: string
  slug: string
}

// Common Error Response
export interface IErrorResponse {
  success: false
  message: string
}
