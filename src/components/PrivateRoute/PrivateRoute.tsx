import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLogin } from '@/contexts/LoginContext';
import { PATH } from '@/constants/paths';

const PrivateRoute: React.FC = () => {
    const { isLoggedIn } = useLogin();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN} state={{ from: location.pathname }} replace />;
    }
    return <Outlet />;
};

export default PrivateRoute;
