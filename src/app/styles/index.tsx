import { baseStyles } from "@/app/styles/base";
import { fontStyles } from "@/app/styles/font";
import { resetStyles } from "@/app/styles/reset";

import { css } from "@emotion/react";
import { Global } from "@emotion/react";

export const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                ${baseStyles}
                ${resetStyles}
                ${fontStyles}
            `}
        />
    );
};
