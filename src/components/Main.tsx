import GlobalStyle from "@/styles/GlobalStyle";
import Category from "@/components/Category";
import SelectFriend from "@/components/SelectFriend";
import Cheering from "@/components/Cheering";
import GiftRanking from "@/components/GiftRankingBox";
import GiftRankingHeader from "@/components/GiftRankingHeader";

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
