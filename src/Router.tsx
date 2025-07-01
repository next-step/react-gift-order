import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { AuthLayout } from "@/pages/auth/AuthLayout";
import SignInPage from "@/pages/auth/SignInPage";

import { RootLayout } from "@/widgets/layouts";

const router = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignInPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Route>,
);

export const browserRouter = createBrowserRouter(router);
