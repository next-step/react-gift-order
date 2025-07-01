import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/index";
import Container from "./styles/Container.tsx/Container";
import {Router} from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Router />
      </Container>
    </ThemeProvider>
  );
}
export default App;
