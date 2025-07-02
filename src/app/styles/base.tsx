import { css } from "@emotion/react";

export const baseStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a,
    a:visited,
    a:focus {
        text-decoration: none;
        color: inherit;
    }
`;
