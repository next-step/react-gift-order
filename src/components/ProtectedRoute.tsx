import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const email = sessionStorage.getItem("email");

  if (!email) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
