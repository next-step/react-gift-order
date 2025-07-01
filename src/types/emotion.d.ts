import "@emotion/react";
import type colors from "@styles/theme/colors";
import type fontSizes from "@styles/theme/fontSizes";
import type spacing from "@styles/theme/spacing";
import type typography from "@styles/theme/typography";

declare module "react" {
  interface Attributes {
    css?: import("@emotion/react").SerializedStyles | string;
  }
}

type Colors = typeof colors;
type FontSizes = typeof fontSizes;
type Spacing = typeof spacing;
type Typography = typeof typography;

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
    fontSizes: FontSizes;
    spacing: Spacing;
    typography: Typography;
  }
}
