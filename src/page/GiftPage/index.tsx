import styled from '@emotion/styled';
import SelectFriend from './components/SelectFriend';
import GiftTheme from './components/GiftTheme';
import Comment from './components/Comment';
import GiftRanking from './components/GiftRanking';

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const GiftsPage = () => {
  return (
    <Container>
      <SelectFriend />
      <GiftTheme />
      <Comment />
      <GiftRanking />
    </Container>
  );
};

export default GiftsPage;
