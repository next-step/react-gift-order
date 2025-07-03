import { useLoginPwForm } from '@/hooks/useLoginPwForm';
import NavigationBar from '@components/NavigationBar';
import { useLoginEmailForm } from '@hooks/useLoginEmailForm';
import { StyeldLoginInput } from '@styles/Login/StyeldLoginInput';
import { StyledLoginButton } from '@styles/Login/StyledLoginButton';
import { StyledLoginComponentContainerDiv } from '@styles/Login/StyledLoginComponentContainerDiv';
import { StyledLoginComponentDiv } from '@styles/Login/StyledLoginComponentDiv';
import { StyledLoginKakoLogo } from '@styles/Login/StyledLoginKakoLogo';
import { useMemo } from 'react';
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

  // 로그인 버튼 활성화 조건 (기존과 동일)
  const isLoginButtonEnabled = useMemo(() => {
    const isIdValid = !id || idError ? false : true;
    const isPasswordValid = !pw || pwError ? false : true;

    return isIdValid && isPasswordValid;
  }, [id, pw, idError, pwError]);

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
            isError={idError}
            placeholder='이메일'
          ></StyeldLoginInput>
          {idError && <p>{idError}</p>}
          <StyeldLoginInput
            type='password'
            value={pw}
            onChange={handlePwChange}
            onBlur={handlePwBlur}
            id='passwd'
            isError={pwError}
            placeholder='비밀번호'
          ></StyeldLoginInput>
          {pwError && <p>{pwError}</p>}
          <StyledLoginButton onClick={handelBackOrHome} disabled={!isLoginButtonEnabled}>
            로그인
          </StyledLoginButton>
        </StyledLoginComponentDiv>
      </StyledLoginComponentContainerDiv>
    </>
  );
};

export default Login;
