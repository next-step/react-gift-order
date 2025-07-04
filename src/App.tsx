import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/components/Layout/Layout";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import CategorySection from "@/components/CategorySection/CategorySection";
import AddFriend from "@/components/OtherSection/AddFriend";
import Fighting from "@/components/OtherSection/Fighting";
import RisingSection from "@/components/RisingSection/RisingSection";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import MyPage from "@/pages/MyPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddFriend />
                <CategorySection />
                <Fighting />
                <RisingSection />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
