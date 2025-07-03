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

  // getUserName(user?.email) 로 해야 타입 추론 가능
  //  getUserName(user.email) 은 타입 에러 발생
  // isLoggedIn 에서 null 검증을 하는데 왜 타입에러?
  //  isLoggedIn 을 그냥 아예 빼야하나?
  const bannerMessage = isLoggedIn
    ? `${getUserName(user?.email)}님! ${GIFT_BANNER_LABELS.BANNER_MESSAGE}`
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
