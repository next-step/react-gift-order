import styled from '@emotion/styled';
import FriendSelectBox from '@/components/FriendSelectBox';
import CategoryList from '@/components/CategoryList';
import NoticeBanner from '@/components/NoticeBanner';
import RankingFilter from '@/components/RankingFilter';
import ProductList from '@/components/ProductList';
import Header from '@/components/Header';

const Container = styled.div`
  max-width: 720px;
  min-height: 180vh;
  background-color: white;

  padding-bottom: 20px;
`;

const PageBackground = styled.div`
  min-height: 11vh;
  background: #f5f6fa;
  padding: 0;
`;

function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <PageBackground>
          <FriendSelectBox />
        </PageBackground>
        <CategoryList />
        <NoticeBanner />
        <RankingFilter />
        <ProductList />
      </Container>
    </>
  );
}

export default MainPage;
