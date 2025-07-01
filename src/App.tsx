import "@/App.css";
import "@/components/Main";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login";
import Main from "@/components/Main";
import NavigationBar from "@/components/NavigationBar";
import NotFound from "@/components/NotFound";
import Layout from "@/styles/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <Main />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
