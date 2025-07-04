import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { JSX } from 'react';
import Home from '@/pages/Home';
import Login from '@/pages/Login/Login';
import globalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import NotFound from '@/pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import My from '@/pages/My/My.tsx';
import Order from '@/pages/Order/Order.tsx';

const App: () => JSX.Element = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my" element={<My />}/>
            <Route path="/order/:id" element={<Order />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;