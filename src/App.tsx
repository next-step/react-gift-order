import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/theme';
import { Routes } from './routes/Routes';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
