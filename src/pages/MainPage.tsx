import TheHeader from "@/components/layout/TheHeader";
import PresentCategory from "@/components/PresentCategory";
import SelectFriendBox from "@/components/SelectFriendBox";
import FightingBox from "@/components/FightingBox";
import GiftsRanking from "@/components/GiftsRanking";

const MainPage = () => {
  return (
    <>
      <TheHeader />
      <SelectFriendBox />
      <PresentCategory />
      <FightingBox
        subMessage="카카오테크 캠퍼스 3기여러분"
        titleMessage="프론트엔드 2단계 과제 화이팅! 🎉"
      />
      <GiftsRanking />
    </>
  );
};

export default MainPage;
