import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';

export default function Layout() {
  return (
    <>
      <TopNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
