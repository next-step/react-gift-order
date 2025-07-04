import { RouterProvider } from "react-router-dom";

import { theme } from "@/app/theme";

import { AuthProvider } from "@/features/auth/context/AuthContext";

import { browserRouter } from "@/Router";
import { ThemeProvider } from "@emotion/react";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <RouterProvider router={browserRouter} />
            </AuthProvider>
        </ThemeProvider>
    );
}
