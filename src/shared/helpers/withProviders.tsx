import React, { type JSX } from "react";
import { cloneElement } from "react";

export default function withProviders<
    C extends React.ComponentType,
    Props extends JSX.LibraryManagedAttributes<C, object>,
>(providers: React.ReactElement[], Component: C) {
    return (props: Props) => {
        const ProvidersWrappedComponent = providers.reduceRight(
            (providers, provider) => {
                return cloneElement(provider, {}, providers);
            },
            <Component {...props} />,
        );
        return ProvidersWrappedComponent;
    };
}
