import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'yz5mbelq',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: (import.meta as any).env?.VITE_SANITY_TOKEN || undefined, // Vite env vars
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  // Simple test query
  testConnection: `*[_type == "post"][0...5]`,
  
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    category,
    featuredImage,
    galleryImages,
    featured,
    gradient
  }`,
  
  featuredPosts: `*[_type == "post" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    category,
    featuredImage,
    galleryImages,
    featured,
    gradient
  }`,
  
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    category,
    featuredImage,
    galleryImages,
    featured,
    gradient
  }`,
}

export type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[]
  publishedAt: string
  author: string
  category: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  galleryImages?: Array<{
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }>
  featured: boolean
  gradient: string
}
