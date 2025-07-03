import GlobalStyle from "@/styles/GlobalStyle.tsx";
import Category from "@/components/Category.tsx";
import SelectFriend from "@/components/SelectFriend.tsx";
import Cheering from "@/components/Cheering.tsx";
import GiftRanking from "@/components/GiftRankingBox.tsx";
import GiftRankingHeader from "@/components/GiftRankingHeader.tsx";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <SelectFriend />
      <Category />
      <Cheering />
      <GiftRankingHeader />
      <GiftRanking />
    </>
  );
};

export default Main;
