import SelectFriend from '@/pages/SelectFriend';
import ThemeContainer from '@/pages/ThemeContainer';
import Ranking from '@/Layout/Ranking';
import styled from '@emotion/styled';

const MainLayoutContainer = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
`;

function MainLayout() {
  return (
    <MainLayoutContainer>
      <SelectFriend />
      <ThemeContainer />
      <Ranking />
    </MainLayoutContainer>
  );
}

export default MainLayout;
