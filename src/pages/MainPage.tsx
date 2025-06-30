import CheerUpPanel from "@src/components/CheerUpPanel";
import GiftThemePanel from "@src/components/GiftThemePanel";
import RealTimeRankPanel from "@src/components/RealTimeRankPanel/RealTimeRankPanel";
import RecipientSelector from "@src/components/RecipientSelector";

function Mainpage() {
  return (
    <>
      <RecipientSelector />
      <GiftThemePanel />
      <CheerUpPanel />
      <RealTimeRankPanel />
    </>
  );
}

export default Mainpage;
