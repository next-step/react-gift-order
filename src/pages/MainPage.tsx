import { NavigationHeader } from '@/components/NavigationHeader';
import { FriendSelector } from '@/components/FriendSelector';
import { GiftCategoryGrid } from '@/components/GiftCategoryGrid';
import { PromotionBanner } from '@/components/PromotionBanner';
import { RealTimeRanking } from '@/components/RealTimeRanking';
import { ProductCard } from '@/components/ProductCard';
import { giftThemes, rankingProducts } from '@/mock/mockData';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export default function MainPage() {
  const handleAddFriend = (): void => {
    // 친구 추가 기능 구현
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader title="선물하기" />

        <FriendSelector onAddFriend={handleAddFriend} />

        <GiftCategoryGrid themes={giftThemes} />

        <PromotionBanner
          subtitle="카카오테크 캠퍼스 3기 여러분"
          title="프론트엔드 2단계 과제 화이팅!"
        />

        <RealTimeRanking
          products={rankingProducts}
          ProductCardComponent={ProductCard}
        />
      </MobileViewport>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  padding: 0 ${theme.spacing.spacing4};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MobileViewport = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  background: ${theme.colors.fill};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: none;
  }
`;
