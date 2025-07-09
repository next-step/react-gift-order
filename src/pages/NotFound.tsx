import styled from '@emotion/styled';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: theme.spacing.spacing4,
  backgroundColor: theme.colors.semantic.backgroundDefault,
}));
const Title = styled.h1(({ theme }) => ({
  ...theme.typography.title1Bold,
  color: theme.colors.semantic.textDefault,
  marginBottom: theme.spacing.spacing2,
}));

const Explanation = styled.p(({ theme }) => ({
  ...theme.typography.body1Regular,
  color: theme.colors.semantic.textSub,
  textAlign: 'center',
}));

const NotFound = () => {
  return (
    <Container>
      <Title>404 - 페이지를 찾을 수 없어요 😢</Title>
      <Explanation>요청하신 페이지가 존재하지 않습니다</Explanation>
    </Container>
  );
};

export default NotFound;
