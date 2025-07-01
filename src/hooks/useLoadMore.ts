import { useState } from 'react'

export function useLoadMore<T>(initial: T[], fetcher?: () => Promise<T[]>) {
  const [items, setItems] = useState<T[]>(initial)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const loadMore = async () => {
    if (loaded || !fetcher) return
    setLoading(true)
    try {
      const more = await fetcher()
      setItems((prev) => [...prev, ...more])
      setLoaded(true)
    } finally {
      setLoading(false)
    }
  }

  return { items, loadMore, loading, loaded }
}