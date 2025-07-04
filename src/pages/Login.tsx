import LoginFormContainer from '@/components/LoginFormContainer';
import NavigationBar from '@components/NavigationBar';
import { StyledLoginComponentContainerDiv } from '@styles/Login/StyledLoginComponentContainerDiv';
import { useNavigate } from 'react-router-dom';
import { URLS } from '@assets/urls';
import StyledTopestDiv from '@styles/StyledTopesDiv';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate(URLS.home);
  };
  return (
    <StyledTopestDiv>
      <NavigationBar />
      <StyledLoginComponentContainerDiv>
        <LoginFormContainer onLoginSuccess={handleLoginSuccess} />
      </StyledLoginComponentContainerDiv>
    </StyledTopestDiv>
  );
};

export default Login;
