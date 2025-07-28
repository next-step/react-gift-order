import { Global } from '@emotion/react';
import { globalStyle } from '@/styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from '@/contexts/UserContext';
import Router from '@/routes/Router';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <UserProvider>
        <RouterProvider router={Router} />
      </UserProvider>
    </>
  );
};

export default App;
