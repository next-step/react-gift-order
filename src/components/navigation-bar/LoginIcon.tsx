import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import userIcon from '@/assets/icons/user.png';
import { useAuth } from '@/context/AuthContext';

const User = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${userIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const LoginIcon = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/my');
    } else {
      navigate('/login');
    }
  };

  return <User onClick={handleClick} />;
};

export default LoginIcon;
