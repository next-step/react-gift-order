import { Routes, Route } from 'react-router-dom';
import App from './App'; 
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import {Navbar} from './components/Navbar'


const Root = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Root;
