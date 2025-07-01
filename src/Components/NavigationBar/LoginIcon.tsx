import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import userIcon from '@/assets/icons/user.png';

const User = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${userIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const LoginIcon = () => {
  const navigate = useNavigate(); 

  return (
    <User onClick={() => navigate('/login')} />
  );
};

export default LoginIcon;