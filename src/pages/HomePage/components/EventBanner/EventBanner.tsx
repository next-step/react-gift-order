import {
  BannerCard,
  EventBannerSection,
  SectionSubTitle,
  SectionTitle,
} from './EventBanner.styles';
import { EVENT_BANNER_LABELS } from './constants/labels';

function EventBanner() {
  return (
    <EventBannerSection>
      <BannerCard>
        <SectionSubTitle>{EVENT_BANNER_LABELS.SUB_TITLE}</SectionSubTitle>
        <SectionTitle>{EVENT_BANNER_LABELS.TITLE}</SectionTitle>
      </BannerCard>
    </EventBannerSection>
  );
}

export default EventBanner;
