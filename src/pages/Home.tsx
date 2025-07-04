import PresentThemeContainer from '@components/PresentThemeContainer';
import PresentRankingContainer from '@/components/PresentRankingContainer';
import SelectFriendContainer from '@components/SelectFriendContainer';
import NavigationBar from '@components/NavigationBar';
import StyledTopestDiv from '@styles/StyledTopesDiv';
import { Spacer } from '@/styles/Spacer';

function Home() {
  return (
    <>
      <StyledTopestDiv>
        <NavigationBar />
        <SelectFriendContainer />
        <PresentThemeContainer />
        <Spacer />
        <PresentRankingContainer />
      </StyledTopestDiv>
    </>
  );
}
export default Home;
