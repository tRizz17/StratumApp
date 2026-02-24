'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type FeedResetContextValue = {
  resetKey: number
  reset: () => void
}

const FeedResetContext = createContext<FeedResetContextValue>({
  resetKey: 0,
  reset: () => {},
})

export function FeedResetProvider({ children }: { children: React.ReactNode }) {
  const [resetKey, setResetKey] = useState(0)
  const reset = useCallback(() => setResetKey((k) => k + 1), [])

  return (
    <FeedResetContext value={{ resetKey, reset }}>
      {children}
    </FeedResetContext>
  )
}

export function useFeedReset() {
  return useContext(FeedResetContext)
}
