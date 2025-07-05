import "reflect-metadata";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { GlobalStyles } from "@/app/styles";

import App from "@/App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>,
);
