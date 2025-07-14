import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { UnderlineInputField } from '@/components/Form/InputField/UnderlineInputField';
import { ROUTE_PATH } from '@/pages/Routes';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router';
import { useLoginForm } from '@/hooks/useLoginForm';
import { useUserInfo } from '@/providers/UserInfo';

export const LoginFormSection = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  const { setUserInfo } = useUserInfo();

  const { email, password, isFormValid } = useLoginForm();

  const handleSubmit = () => {
    if (!isFormValid) return;

    setUserInfo({
      email: email.value,
    });

    const redirectUrl = redirect ? decodeURIComponent(redirect) : ROUTE_PATH.HOME;
    navigate(redirectUrl);
  };

  return (
    <Wrapper>
      <UnderlineInputField
        placeholder='이메일'
        value={email.value}
        onChange={(e) => email.onChange(e.target.value)}
        onBlur={email.onBlur}
        invalid={!!email.error}
        message={email.error}
      />
      <HorizontalSpacing size='spacing4' />
      <UnderlineInputField
        placeholder='비밀번호'
        type='password'
        value={password.value}
        onChange={(e) => password.onChange(e.target.value)}
        onBlur={password.onBlur}
        invalid={!!password.error}
        message={password.error}
      />
      <HorizontalSpacing size='spacing12' />
      <Button onClick={handleSubmit} disabled={!isFormValid}>
        로그인
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  maxWidth: '26.25rem',
  padding: theme.spacing.spacing4,
}));

const Button = styled.button(({ theme }) => ({
  width: '100%',
  height: '2.75rem',
  ...theme.typography.body2Regular,
  color: theme.colors.semantic.text.default,
  backgroundColor: theme.colors.semantic.brand.kakaoYellow,
  borderRadius: theme.spacing.spacing1,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',

  '&:hover:not(:disabled)': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowHover,
  },

  '&:active:not(:disabled)': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowActive,
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));
