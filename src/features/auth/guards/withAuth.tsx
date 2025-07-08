import React from "react";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { useRedirect } from "@/shared/hooks/useRedirect";

import type { EmotionJSX } from "node_modules/@emotion/react/dist/declarations/src/jsx-namespace";

type HOCComponent<P> = React.ComponentType<P> | EmotionJSX.Element;

export const withAuth = <P extends Record<string, unknown>>(Component: HOCComponent<P>) => {
    const WrappedComponent = (props: P) => {
        const { isAuthenticated } = useAuth();
        const { returnToRedirect } = useRedirect();

        if (!isAuthenticated) {
            returnToRedirect();
            return null;
        }

        return React.createElement(Component as React.ComponentType<P>, props);
    };

    return React.createElement(WrappedComponent);
};
