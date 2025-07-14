import Navigation from '@/layouts/Navigation';
import GlobalStyle from '@/styles/global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import AppRouter from './routes/Routers';
import { UserInfoProvider } from './contexts/UserInfoContext';

const AppContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
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
