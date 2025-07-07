import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/index";
import Container from "./styles/Container.tsx/Container";
import {AppRouter} from './routes/Router';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles />
          <AppRouter/>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}
export default App;
