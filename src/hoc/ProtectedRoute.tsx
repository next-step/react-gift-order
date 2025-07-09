import type { ReactNode } from 'react';
import useAuth from '@/contexts/useAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <>{children}</>;
} 
