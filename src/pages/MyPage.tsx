import MyPageInfo from '@components/MyPageInfo';
import NavigationBar from '@components/NavigationBar';
import styled from '@emotion/styled';

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: theme.semanticColors.background.default,
}));

const MyPage = () => {
  return (
    <>
      <Wrapper>
        <NavigationBar></NavigationBar>
        <MyPageInfo />
      </Wrapper>
    </>
  );
};

export default MyPage;
