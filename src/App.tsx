import { AuthProvider } from '@contexts/AuthContext';
import { ModalProvider } from '@contexts/ModalContext';
import styled from '@emotion/styled';
import Router from '@shared/routes/Router';

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.semantic.backgroundDefault,
  minHeight: '100vh',
}));

const App = () => {
  return (
    <ModalProvider>
      <AuthProvider>
        <Container>
          <Router />
        </Container>
      </AuthProvider>
    </ModalProvider>
  );
};

export default App;
