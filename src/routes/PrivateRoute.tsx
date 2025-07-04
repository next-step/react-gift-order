import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import type { JSX } from 'react'

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}
