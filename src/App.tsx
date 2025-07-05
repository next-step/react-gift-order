import Router from '@router/Router';
import { RouterProvider } from 'react-router-dom';
import { globalStyles } from '@styles/globalStyles';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={Router} />
    </>
  );
}
export default App;
