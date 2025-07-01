import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Navigation } from './components/Layout/Navigation';

import { BrowserRouter } from 'react-router';
import { Routes } from './pages/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BaseLayout header={<Navigation />}>
          <Routes />
        </BaseLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
