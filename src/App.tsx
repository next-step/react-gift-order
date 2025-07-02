/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from '@emotion/react';
import { reset } from './styles/reset';
import { theme } from './styles/theme';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

const containerStyle = css`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
  background-color: ${theme.colors.backgroundDefault};
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <div css={containerStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
