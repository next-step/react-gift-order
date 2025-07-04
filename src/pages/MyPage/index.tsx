import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@/contexts/LoginContext';
import { PATH } from '@/constants/paths';

const MyPage = () => {
    const { logout } = useLogin();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(PATH.LOGIN, { replace: true });
    };

    return (
        <div>
            <h1>마이페이지</h1>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
};
export default MyPage;
