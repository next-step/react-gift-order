import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import { useUserInfo } from '@/providers/UserInfo';
import styled from '@emotion/styled';

const MyPage = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  const name = userInfo?.email.split('@')[0];

  const handleLogout = async () => {
    setUserInfo(undefined);
  };

  return (
    <Wrapper>
      <HorizontalSpacing size='spacing8' />
      <Typography variant='subtitle1Bold'>마이 페이지</Typography>
      <HorizontalSpacing size='spacing2' />
      <Typography variant='body1Regular'>{name}님 안녕하세요!</Typography>
      <Typography variant='body1Regular'>이메일 주소는 {userInfo?.email}입니다.</Typography>
      <HorizontalSpacing size='spacing6' />
      <Button onClick={handleLogout}>로그아웃</Button>
      <HorizontalSpacing size='spacing10' />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.main`
  width: 100%;
  padding: 0 1rem;
`;

const Button = styled.button(({ theme }) => ({
  height: '2.75rem',
  ...theme.typography.body2Regular,
  color: theme.colors.semantic.text.default,
  backgroundColor: theme.colors.scale.gray300,
  borderRadius: theme.spacing.spacing1,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',
  padding: `0 ${theme.spacing.spacing3}`,

  '&:hover:not(:disabled)': {
    backgroundColor: theme.colors.scale.gray400,
  },

  '&:active:not(:disabled)': {
    backgroundColor: theme.colors.scale.gray500,
  },
}));
