import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import NotFound from '@/Pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
