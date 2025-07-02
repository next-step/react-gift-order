import { GlobalStyles } from "../src/app/styles";
import { theme } from "../src/app/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: { default: theme },
        defaultTheme: "light",
        Provider: ThemeProvider,
        GlobalStyles: GlobalStyles,
    }),
];

export default preview;
