import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav';

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
