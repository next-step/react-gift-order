import React from "react";
import ReactDOM from "react-dom/client";
import Router from "@/routes/Router";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme/index";
import { AuthProvider } from "./contexts/AuthContext";
import { OrderProvider } from "./contexts/OrderContext";
import { OrderFormProvider } from "./contexts/OrderFormContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderFormProvider>
      <OrderProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
          </ThemeProvider>
        </AuthProvider>
      </OrderProvider>
    </OrderFormProvider>
  </React.StrictMode>
);
