import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import type { ComponentType, PropsWithChildren } from "react";

export function withAuth<T>(WrappedComponent: ComponentType<PropsWithChildren<T>>) {
    return function AuthProtectedComponent(props: PropsWithChildren<T>) {
        const { isLoggedIn, isInitialized } = useAuth();
        const location = useLocation();

        if (!isInitialized) {
            return null;
        }

        if (!isLoggedIn) {
            return <Navigate to="/login" state={{ from: location.pathname }} replace />;
        }

        return <WrappedComponent {...props} />;
    };
}