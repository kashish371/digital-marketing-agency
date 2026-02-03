import { ObjectId } from 'mongodb'

export interface Contact {
  _id?: ObjectId
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
  createdAt: Date
  status: 'new' | 'contacted' | 'converted' | 'closed'
}

export interface Newsletter {
  _id?: ObjectId
  email: string
  subscribedAt: Date
  active: boolean
}

export interface BlogPost {
  _id?: ObjectId
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  published: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface CaseStudy {
  _id?: ObjectId
  title: string
  slug: string
  client: string
  industry: string
  services: string[]
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  coverImage: string
  images: string[]
  published: boolean
  createdAt: Date
}

export interface User {
  _id?: ObjectId
  email: string
  password: string
  name: string
  role: 'admin' | 'editor'
  createdAt: Date
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
  }
}

export interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image: string
  rating: number
}
