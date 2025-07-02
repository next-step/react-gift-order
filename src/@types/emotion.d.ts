import { colorToken } from "@/app/theme/colors";
import { spacingToken } from "@/app/theme/spacing";
import { typographyToken } from "@/app/theme/typography";

import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        colors: typeof colorToken;
        typography: typeof typographyToken;
        spacing: typeof spacingToken;
    }
}
