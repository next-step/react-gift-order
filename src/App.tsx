import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Navigation } from './components/Layout/Navigation';

import { BrowserRouter } from 'react-router';
import { Routes } from './pages/Routes';
import { UserInfoProvider } from './providers/UserInfo';
import { ModalProvider } from './providers/Modal';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserInfoProvider>
          <ModalProvider>
            <BaseLayout header={<Navigation />}>
              <Routes />
            </BaseLayout>
          </ModalProvider>
        </UserInfoProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
