import { Main, Section } from '@/components/layout';
import { CategorySection } from '@/components/category';
import { FriendSelectSection, PromoSection } from '@/components/misc';
import { RankingSection } from '@/components/ranking';
import { categories } from '@/data';

const HomePage = () => {
  const handleSelectFriend = () => {
    console.log('친구 선택 클릭');
  };

  const handleCategoryClick = (category: any) => {
    console.log('카테고리 클릭:', category);
  };

  return (
    <Main>
      <Section spacing="sm">
        <FriendSelectSection onSelectFriend={handleSelectFriend} />
      </Section>

      <CategorySection
        categories={categories}
        onCategoryClick={handleCategoryClick}
      />

      <Section spacing="md">
        <PromoSection
          title="카카오 테크 캠퍼스 3기여러분"
          subtitle="프론트엔드 2단계 과제 화이팅!"
        />
      </Section>

      <RankingSection />
    </Main>
  );
};

export default HomePage;
