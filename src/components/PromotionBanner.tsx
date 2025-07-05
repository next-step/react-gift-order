import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface PromotionBannerProps {
  subtitle: string;
  title: string;
}

export function PromotionBanner({ subtitle, title }: PromotionBannerProps) {
  return (
    <BannerContainer>
      <Banner>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerTitle>
          {title}
          <Emoji>🎉</Emoji>
        </BannerTitle>
      </Banner>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing4};
`;

const Banner = styled.div`
  width: 100%;
  background: ${theme.colors.kakaoYellow};
  border: none;
  border-radius: 12px;
  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing5};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const BannerSubtitle = styled.span`
  display: block;
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  color: ${theme.colors.gray700};
  margin-bottom: ${theme.spacing.spacing0};
`;

const BannerTitle = styled.span`
  display: block;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  line-height: ${theme.typography.body1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: ${theme.typography.body2Bold.fontSize};
  }
`;

const Emoji = styled.span`
  margin-left: ${theme.spacing.spacing1};
  font-size: 1.2em;
`;
