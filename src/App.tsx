import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/theme';
import { Routes } from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
