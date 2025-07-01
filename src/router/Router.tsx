import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
