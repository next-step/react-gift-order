import { RouterProvider } from "react-router-dom";

import { theme } from "@/app/theme";

import { browserRouter } from "@/Router";
import { ThemeProvider } from "@emotion/react";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={browserRouter} />
        </ThemeProvider>
    );
}
