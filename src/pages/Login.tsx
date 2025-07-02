import styled from '@emotion/styled';
import { css } from '@emotion/react';
import KakaoIconUrl from '../assets/KaKaoLogo.svg';
import GlobalStyle from '@/styles/global';
import NavigationBar from '@components/NavigationBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(247, 248, 249);
`;

const LoginPage = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;
`;

const Container = styled.main`
  width: 100%;
  height: calc(-2.75rem + 100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 5.5rem;
  color: rgb(42, 48, 56);
`;

const InputSection = styled.section`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`;

const InputBox = styled.input<{ hasError?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  color: rgb(42, 48, 56);
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  padding: 8px 0px;
  border-width: 0px 0px 1px;
  border-color: rgb(220, 222, 227);
  :focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? 'rgb(250, 52, 44)' : 'rgb(134, 139, 148)')};
  }
  ::placeholder {
    color: #b0b3ba;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 2.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  background-color: rgb(254, 229, 0);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms;
`;

interface LocationState {
  from?: { pathname: string };
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const redirectTo = state?.from?.pathname ?? '/';

  // state 생성
  const [id, setId] = useState('');
  const [idError, setIdError] = useState('');

  // ID 조건 검사
  const validateId = (value: string) => {
    if (!value.trim()) {
      return 'ID를 입력해주세요.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'ID는 이메일 형식으로 입력해주세요.';
    }
    return '';
  };

  const handleClick = () => {
    navigate(redirectTo, { replace: true });
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavigationBar />
        <LoginPage>
          <Container>
            <Logo src={KakaoIconUrl} alt="카카오 로고"></Logo>
            <InputSection>
              <div>
                <InputBox
                  placeholder="이메일"
                  value={id}
                  hasError={!!idError}
                  onChange={(e) => {
                    const value = e.target.value;
                    setId(value);

                    const error = validateId(value);
                    setIdError(error);
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(134, 139, 148)';
                  }}
                  onBlur={(e) => {
                    const err = validateId(e.target.value);
                    setIdError(err);
                    // 오류가 있으면 빨간색 테두리 적용
                    if (err) {
                      e.currentTarget.style.borderColor = 'red';
                    }
                  }}
                  style={idError ? { borderColor: 'rgb(250, 52, 44)' } : {}}
                />
                {idError && (
                  <span
                    css={css`
                      color: rgb(250, 52, 44);
                      font-size: 0.75rem;
                      margin-top: 4px;
                      display: inline-block;
                    `}
                  >
                    {idError}
                  </span>
                )}
              </div>
              <div
                css={css`
                  width: 100%;
                  height: 16px;
                  background-color: transparent;
                `}
              />
              <div>
                <InputBox placeholder="비밀번호" type="password" />
              </div>
              <div
                css={css`
                  width: 100%;
                  height: 48px;
                  background-color: transparent;
                `}
              />
              <LoginButton onClick={handleClick}>로그인</LoginButton>
            </InputSection>
          </Container>
        </LoginPage>
      </Wrapper>
    </>
  );
};

export default Login;
