import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthProvider';
import routes from '@/routes/router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
