import { ReactNode, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'

interface RequireAuthProps {
  children: ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { token } = useContext(AuthContext)
  const { pathname } = useLocation()

  if (!token) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(pathname)}`} replace />
  }

  return children
}

