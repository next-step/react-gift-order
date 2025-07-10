import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthProvider';
import { ReceiverProvider } from '@/contexts/ReceiverProvider';
import routes from '@/routes/router';

function App() {
  return (
    <AuthProvider>
      <ReceiverProvider>
        <RouterProvider router={routes} />
      </ReceiverProvider>
    </AuthProvider>
  );
}

export default App;
