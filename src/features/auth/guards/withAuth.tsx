import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { useRedirect } from "@/shared/hooks/useRedirect";

import type { EmotionJSX } from "node_modules/@emotion/react/dist/declarations/src/jsx-namespace";

type HOCComponent<P> = React.ComponentType<P> | EmotionJSX.Element;

export const withAuth = <P extends Record<string, unknown>>(Component: HOCComponent<P>) => {
    const WrappedComponent = (props: P) => {
        const navigate = useNavigate();
        const { isAuthenticated } = useAuth();
        const { redirectPath, returnToRedirect } = useRedirect();

        useEffect(() => {
            if (!isAuthenticated) {
                if (redirectPath) returnToRedirect();
                else navigate("/auth/signin");
            }
        }, [isAuthenticated, navigate, redirectPath, returnToRedirect]);

        return React.createElement(Component as React.ComponentType<P>, props);
    };

    return React.createElement(WrappedComponent);
};
