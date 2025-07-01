import {
  AddIcon,
  AddIconWrapper,
  BannerCard,
  BannerMessage,
  GiftBannerSection,
} from './GiftBanner.styles';
import PlusIconSvg from './icons/plus.svg';
import { GIFT_BANNER_LABELS } from './constants/labels';

function GiftBanner() {
  return (
    <GiftBannerSection>
      <BannerCard>
        <AddIconWrapper>
          <AddIcon src={PlusIconSvg} />
        </AddIconWrapper>
        <BannerMessage>{GIFT_BANNER_LABELS.BANNER_MESSAGE}</BannerMessage>
      </BannerCard>
    </GiftBannerSection>
  );
}

export default GiftBanner;
