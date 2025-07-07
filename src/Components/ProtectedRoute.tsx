import { useLoginContext } from '@/contexts/LoginContext'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useLoginContext();
  if (!user) {
    // 로그인하지 않은 경우 /login으로 리다이렉트
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute; 