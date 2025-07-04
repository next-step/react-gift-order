import { useLoginEmailForm } from '@/hooks/useLoginEmailForm';
import { useLoginPwForm } from '@/hooks/useLoginPwForm';
import { StyeldLoginInput } from '@/styles/Login/StyeldLoginInput';
import { StyledLoginButton } from '@/styles/Login/StyledLoginButton';
import { StyledLoginComponentDiv } from '@/styles/Login/StyledLoginComponentDiv';
import { StyledLoginKakoLogo } from '@/styles/Login/StyledLoginKakoLogo';
import { useMemo, useState } from 'react';

interface LoginFormProp {
  onLoginSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProp> = ({ onLoginSuccess }) => {
  const { id, idError, handleIdBlur, handleIdChange } = useLoginEmailForm();
  const { pw, pwError, handlePwBlur, handlePwChange } = useLoginPwForm();
  //로그인 타입 검사

  //const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  const handelLogin = () => {
    const username = id.split('@')[0];

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);

    onLoginSuccess?.();
  };

  const isLoginButtonEnabled = useMemo(() => {
    const isIdValid = !id || idError ? false : true;
    const isPasswordValid = !pw || pwError ? false : true;

    return isIdValid && isPasswordValid;
  }, [id, pw, idError, pwError]);
  return (
    <>
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
        />
        {idError && <p>{idError}</p>}
        <StyeldLoginInput
          type='password'
          value={pw}
          onChange={handlePwChange}
          onBlur={handlePwBlur}
          id='passwd'
          isError={pwError}
          placeholder='비밀번호'
        />
        {pwError && <p>{pwError}</p>}
        <StyledLoginButton onClick={handelLogin} disabled={!isLoginButtonEnabled}>
          로그인
        </StyledLoginButton>
      </StyledLoginComponentDiv>
    </>
  );
};

export default LoginForm;
