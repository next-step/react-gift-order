import { ThemeProvider } from '@emotion/react';
import { Router } from '@/router/Router';
import { Global } from '@emotion/react';
import reset from '@/styles/reset';
import { theme } from '@/styles/theme';
import { AuthProvider } from '@/context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Global styles={reset} />
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
