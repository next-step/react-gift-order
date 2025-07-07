import { Navigate, useLocation } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function RequireAuth({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}