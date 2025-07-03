import { useLoginPwForm } from '@/hooks/useLoginPwForm';
import NavigationBar from '@components/NavigationBar';
import { useLoginEmailForm } from '@hooks/useLoginEmailForm';
import { StyeldLoginInput } from '@styles/Login/StyeldLoginInput';
import { StyledLoginButton } from '@styles/Login/StyledLoginButton';
import { StyledLoginComponentContainerDiv } from '@styles/Login/StyledLoginComponentContainerDiv';
import { StyledLoginComponentDiv } from '@styles/Login/StyledLoginComponentDiv';
import { StyledLoginKakoLogo } from '@styles/Login/StyledLoginKakoLogo';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handelBackOrHome = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const { id, idError, handleIdBlur, handleIdChange } = useLoginEmailForm();
  const { pw, pwError, handlePwBlur, handlePwChange } = useLoginPwForm();
  return (
    <>
      <NavigationBar />
      <StyledLoginComponentContainerDiv>
        <StyledLoginComponentDiv>
          <StyledLoginKakoLogo>kakao</StyledLoginKakoLogo>
          <StyeldLoginInput
            type='text'
            value={id}
            onChange={handleIdChange}
            onBlur={handleIdBlur}
            id='loginid'
            placeholder='이메일'
          ></StyeldLoginInput>
          {idError && <p>{idError}</p>}
          <StyeldLoginInput
            type='password'
            value={pw}
            onChange={handlePwChange}
            onBlur={handlePwBlur}
            id='passwd'
            placeholder='비밀번호'
          ></StyeldLoginInput>
          {pwError && <p>{pwError}</p>}
          <StyledLoginButton onClick={handelBackOrHome}>로그인</StyledLoginButton>
        </StyledLoginComponentDiv>
      </StyledLoginComponentContainerDiv>
    </>
  );
};

export default Login;
