import "@emotion/react";
import { CustomTheme } from "./styles/theme";

declare module "@emotion/react" {
  export type Theme = CustomTheme;
}
