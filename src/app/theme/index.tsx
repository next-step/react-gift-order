import { colorToken } from "@/app/theme/colors";
import { spacingToken } from "@/app/theme/spacing";
import { typographyToken } from "@/app/theme/typography";

export const theme = {
    colors: colorToken,
    spacing: spacingToken,
    typography: typographyToken,
} as const;
