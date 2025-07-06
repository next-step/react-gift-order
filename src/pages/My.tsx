import styled from '@emotion/styled';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.semantic.text.default};
    cursor: pointer;
    font-size: 1rem;
    margin-left: 10px;

    &:hover {
        color: ${({ theme }) => theme.color.semantic.text.default};
    }
`;


const My = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    return (
        <>
        {user?.email},
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>


    );
}
export default My;