import {
  AddIcon,
  AddIconWrapper,
  BannerCard,
  BannerMessage,
  GiftBannerSection,
} from "./GiftBanner.styles";
import PlusIconSvg from "./icons/plus.svg";
import { GIFT_BANNER_LABELS } from "./constants/labels";
import { useAuth } from "@/contexts/AuthContext";
import { getUserName } from "@/utils/auth";

function GiftBanner() {
  const { user, isLoggedIn } = useAuth();

  const bannerMessage = isLoggedIn
    ? `${getUserName(user.email)}님! ${GIFT_BANNER_LABELS.BANNER_MESSAGE}`
    : GIFT_BANNER_LABELS.BANNER_MESSAGE;

  return (
    <GiftBannerSection>
      <BannerCard>
        <AddIconWrapper>
          <AddIcon src={PlusIconSvg} />
        </AddIconWrapper>
        <BannerMessage>{bannerMessage}</BannerMessage>
      </BannerCard>
    </GiftBannerSection>
  );
}

export default GiftBanner;
