import Navigation from '@/layouts/Navigation';
import GlobalStyle from '@/styles/global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import AppRouter from './routes/Routers';
import { UserInfoProvider } from './contexts/UserInfoContext';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding-top: 2.75rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserInfoProvider>
        <AppContainer>
          <Navigation />
          <AppRouter />
        </AppContainer>
      </UserInfoProvider>
    </ThemeProvider>
  );
}

export default App;
