import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function useQueryState<T extends string>(
  key: string,
  defaultValue: T
) {
  const [params, setParams] = useSearchParams()
  const init = (params.get(key) as T | null) ?? defaultValue
  const [state, setState] = useState<T>(init)

  useEffect(() => {
    params.set(key, state)
    setParams(params, { replace: true })
  }, [state])

  useEffect(() => {
    const onPop = () => {
      setState(
        (new URL(window.location.href).searchParams.get(key) as T) ??
          defaultValue
      )
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  return [state, setState] as const
}
