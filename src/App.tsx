import { GlobalResetStyle } from "@styles/reset";
import { GlobalTypographyStyle } from "@styles/typography";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import AppLayout from "@/components/layout/AppLayout";
import Router from "@/routes/router";
import { UserInfoProvider } from "@/contexts/UserInfoContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <UserInfoProvider>
        <ModalProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </ModalProvider>
      </UserInfoProvider>
    </ThemeProvider>
  );
}

export default App;
