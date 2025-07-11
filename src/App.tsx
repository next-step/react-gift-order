import GlobalStyle from '@/styles/global'
import { ThemeProvider } from "@emotion/react";
import theme from './styles/theme'
import Main from './page/Main';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Notfound from './page/Notfound';
import My from './page/My';
import Order from './page/Order';
import ProtectedRoute from './component/ProtectedRoute';
import { OrderContextProvider } from './context/OrderContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/My" element={<ProtectedRoute><My /></ProtectedRoute>} />
          <Route path="/Order" element={
            <OrderContextProvider>
              <Order />
            </OrderContextProvider>
          } />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App