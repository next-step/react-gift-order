import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyle';
import GlobalReset from '@/styles/GlobalReset';
import { theme } from '@/styles/theme';
import { Router } from '@/Components/Router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
