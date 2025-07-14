import { AuthProvider } from '@contexts/AuthContext';
import styled from '@emotion/styled';
import Router from '@shared/Router';

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.semantic.backgroundDefault,
  minHeight: '100vh',
}));

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Router />
      </Container>
    </AuthProvider>
  );
};

export default App;
