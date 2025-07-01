import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { UnderlineInputField } from '@/components/Form/InputField/UnderlineInputField';
import { ROUTE_PATH } from '@/pages/Routes';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router';

export const LoginFormSection = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const redirectUrl = redirect ? decodeURIComponent(redirect) : ROUTE_PATH.HOME;

    navigate(redirectUrl);
  };

  return (
    <Wrapper>
      <UnderlineInputField placeholder='이메일' />
      <HorizontalSpacing size='spacing4' />
      <UnderlineInputField placeholder='비밀번호' type='password' />
      <HorizontalSpacing size='spacing12' />
      <Button onClick={handleSubmit}>로그인</Button>
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
  transition: 'background-color 200ms',

  '&:hover': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowHover,
  },

  '&:active': {
    backgroundColor: theme.colors.semantic.brand.kakaoYellowActive,
  },
}));
