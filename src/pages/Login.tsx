import styled from '@emotion/styled';
import KakaoIconUrl from '../assets/KaKaoLogo.svg';
import GlobalStyle from '@/styles/global';
import NavigationBar from '@components/NavigationBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginForm } from '@/hooks/useLoginForm';

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.semanticColors.background.fill,
}));

const LoginPage = styled.div(({ theme }) => ({
  maxWidth: '720px',
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  backgroundColor: theme.semanticColors.background.default,
  paddingTop: '2.75rem',
}));

const Container = styled.main`
  width: 100%;
  height: calc(-2.75rem + 100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img(({ theme }) => ({
  width: '5.5rem',
  color: theme.semanticColors.text.default,
}));

const InputSection = styled.section`
  width: 100%;
  max-width: 26.25rem;
  padding: 16px;
`;

type StyleProps = {
  hasError?: boolean;
  disabled?: boolean;
};

const InputBox = styled.input<StyleProps>(({ theme, hasError }) => ({
  width: '100%',
  boxSizing: 'border-box',
  color: theme.semanticColors.text.default,
  transition: 'border-color 200ms',
  borderStyle: 'solid',
  minHeight: '2.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  padding: '8px 0px',
  borderWidth: '0px 0px 1px',
  borderColor: hasError ? theme.semanticColors.state.critical : theme.semanticColors.border.default,

  '&:focus': {
    outline: 'none',
    borderColor: theme.colorScale.gray700,
  },

  '::placeholder': {
    color: theme.semanticColors.text.placeholder,
  },
}));

const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.semanticColors.state.critical,
  fontSize: '0.75rem',
  marginTop: '4px',
  display: 'inlineBlock',
}));

const LoginButton = styled.button<StyleProps>(({ disabled, theme }) => ({
  width: '100%',
  height: '2.75rem',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  backgroundColor: theme.semanticColors.brand.kakaoYellow,
  borderRadius: '4px',
  border: 'none',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? '0.5' : '1',
  transition: 'background-color 200ms',

  ...(disabled
    ? {}
    : {
        '&:hover': {
          backgroundColor: theme.semanticColors.brand.kakaoYellowHover,
        },
        '&:active': {
          backgroundColor: theme.semanticColors.brand.kakaoYellowActive,
        },
      }),
}));

const HoriziontalSpacing1 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing4,
  backgroundColor: 'transparent',
}));

const HoriziontalSpacing2 = styled.div(({ theme }) => ({
  width: '100%',
  height: theme.spacing.spacing12,
  backgroundColor: 'transparent',
}));

interface LocationState {
  from?: { pathname: string };
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let redirectTo = '/';
  if (location.state && 'from' in location.state) {
    redirectTo = (location.state as LocationState).from?.pathname ?? '/';
  }

  const {
    id,
    idError,
    pw,
    pwError,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
    isFormValid,
  } = useLoginForm();

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
                  onChange={handleIdChange}
                  onBlur={handleIdBlur}
                />
                {idError && <ErrorMessage>{idError}</ErrorMessage>}
              </div>
              <HoriziontalSpacing1 />
              <div>
                <InputBox
                  placeholder="비밀번호"
                  type="password"
                  value={pw}
                  hasError={!!pwError}
                  onChange={handlePwChange}
                  onBlur={handlePwBlur}
                />
                {pwError && <ErrorMessage>{pwError}</ErrorMessage>}
              </div>
              <HoriziontalSpacing2 />
              <LoginButton onClick={handleClick} disabled={!isFormValid()}>
                로그인
              </LoginButton>
            </InputSection>
          </Container>
        </LoginPage>
      </Wrapper>
    </>
  );
};

export default Login;
