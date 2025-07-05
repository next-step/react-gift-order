import "@/App.css";
import "@/components/Main";
import { theme } from "@/styles/theme.ts";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login.tsx";
import Main from "@/components/Main.tsx";
import NavigationBar from "@/components/NavigationBar";
import NotFound from "@/components/NotFound";
import Layout from "@/styles/Layout.tsx";
import MyPage from "@/components/MyPage.tsx";
import { UserInfoProvider } from "@/context/UserInfoProvider";
import Order from "@/components/Order";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <NavigationBar />
        <UserInfoProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserInfoProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
