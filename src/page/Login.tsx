import kakaoLogoImg from '@/assets/KaKao로고.svg';
import useInput from '@/hook/useInput';
import { validateEmail, validatePassword } from '@/utils/validateInput';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage,
  InputSection,
  KakaoLogo,
  LoginButton,
  LoginMain,
  LoginSection,
  MyDiv,
} from './Login.styled';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { EmptyDiv16h, EmptyDiv48h } from '../styles/Common.styled';

const Login = () => {
  const navigate = useNavigate();
  const id = useInput(validateEmail);
  const pw = useInput(validatePassword);

  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      navigate('/My' , { replace: true });
    }
  }, [auth.user, navigate]);

  const canSubmit = !id.error && !pw.error && id.value != '' && pw.value!= ''
  const handleLoginClick = () => {
    auth.logIn(id.value);
    navigate('/My');
  };

  return (
    <MyDiv>
      <LoginMain>
        <KakaoLogo alt="카카오 공식 로고" src={kakaoLogoImg} />

        <LoginSection>
          <div>
            <InputSection
              placeholder="이메일"
              value={id.value}
              onChange={id.onChange}
              onBlur={id.onBlur}
              hasError={!id.isValid}
            />
            {!id.isValid && <ErrorMessage>{id.error}</ErrorMessage>}
          </div>
          <EmptyDiv16h />
          <div>
            <InputSection
              type="password"
              placeholder="비밀번호"
              value={pw.value}
              onChange={pw.onChange}
              onBlur={pw.onBlur}
              hasError={!pw.isValid}
            />
            {!pw.isValid && <ErrorMessage>{pw.error}</ErrorMessage>}
          </div>
          <EmptyDiv48h />
          <LoginButton
            disabled={!canSubmit}
            onClick={handleLoginClick}
            notVaild={!canSubmit}
          >
            로그인
          </LoginButton>
        </LoginSection>
      </LoginMain>
    </MyDiv>
  );
};

export default Login;
