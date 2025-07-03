import NavigationBar from "@/components/NavigationBar/NavigationBar";
import SelectFriendSection from "@/sections/SelectFriendSection/SelectFriendSection";
import CategorySection from "@/sections/CategorySection/CategorySection";
import RankingSection from "@/sections/RankingSection/RankingSection";
import { Container, Line1 } from "@/pages/Home/Home.style";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <SelectFriendSection />
      <CategorySection />
      <Container>
        <Line1>카카오테크 캠퍼스 3기 여러분</Line1>
        <span>프론트엔드 2단계 과제 화이팅! 🎉</span>
      </Container>
      <RankingSection />
    </>
  );
};

export default HomePage;
