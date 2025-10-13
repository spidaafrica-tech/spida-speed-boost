import { useState, useEffect } from 'react'
import { client, queries, BlogPost } from '@/lib/sanity'

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = await client.fetch(queries.allPosts)
        setPosts(data || [])
      } catch (err) {
        // Surface a concise message for the UI, but avoid noisy console errors in prod
        setError(err instanceof Error ? err.message : 'Failed to fetch posts')
        setPosts([]) // Set empty array on error
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export function useFeaturedPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFeaturedPosts() {
      try {
        setLoading(true)
        const data = await client.fetch(queries.featuredPosts)
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured posts')
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPosts()
  }, [])

  return { posts, loading, error }
}

export function usePostBySlug(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        setLoading(true)
        const data = await client.fetch(queries.postBySlug, { slug })
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  return { post, loading, error }
}
