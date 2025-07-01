import { Global, ThemeProvider, css } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import resetStyles from '@/reset';
import theme from './styles/theme';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { ViewportContainer } from './App.styles';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[resetStyles, globalStyles]} />
      <ViewportContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
