import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { withAuth } from "@/features/auth/guards/withAuth";

import HomePage from "@/pages/HomePage";
import MyPage from "@/pages/MyPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { AuthLayout } from "@/pages/auth/AuthLayout";
import SignInPage from "@/pages/auth/SignInPage";
import OrderPage from "@/pages/order/OrderPage";

import { RootLayout } from "@/widgets/layouts";

const router = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignInPage />} />
        </Route>
        <Route path="my" element={withAuth(MyPage)} />
        <Route path="order/:id" element={withAuth(OrderPage)} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>,
);

export const browserRouter = createBrowserRouter(router);
