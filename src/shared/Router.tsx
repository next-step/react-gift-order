import Home from "@/Home"
import Login from "@/pages/Login"
import Categories from "@/pages/Categories"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PresentProvider from "@/context/PresentProvider"
import PresentThemeProvider from "@/context/PresentThemeProvider"
import NotFound from "@/pages/NotFound"
import { AuthContextProvider } from "@/context/AuthContextProvider"
import MyPage from "@/pages/MyPage"
import ProtectedRoute from "./ProtectedRoute"
import OrderPage from "@/pages/OrderPage"
import CardProvider from "@/context/CardProvider"

const Router = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <PresentThemeProvider>
          <PresentProvider>
            <CardProvider>
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route index element={<Categories />} />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/my"
                    element={
                      <ProtectedRoute>
                        <MyPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/order/:productId"
                    element={
                      <ProtectedRoute>
                        <OrderPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route path={"*"} element={<NotFound />} />
                </Route>
              </Routes>
            </CardProvider>
          </PresentProvider>
        </PresentThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default Router
