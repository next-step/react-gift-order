import '@styles/Home.css';
import PresentThemeContainer from '@components/PresentThemeContainer';
import PresentRankingContainer from '@/components/PresentRankingContainer';
import SelectFriendContainer from '@components/SelectFriendContainer';
import styled from '@emotion/styled';
import NavigationBar from '@components/NavigationBar';
import StyledTopestDiv from '@styles/StyledTopesDiv';

const Spacer = styled.div`
  //NavigationBar가 상단에 fixed될때 다른 컴포넌트를 가리는 문제르 해결하기 위한 공백 공간
  height: 50px;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
function Home() {
  return (
    <>
      <StyledTopestDiv>
        <NavigationBar />
        <Spacer />
        <SelectFriendContainer />
        <PresentThemeContainer />
        <Spacer />
        <PresentRankingContainer />
      </StyledTopestDiv>
    </>
  );
}
export default Home;
