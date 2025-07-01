import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';

const BannerContainer = styled.div`
  background: ${colors.yellow};
  margin: ${spacing.lg};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.md};
  display: flex;
  align-items: center;
  gap: ${spacing.md};
`;

const Icon = styled.span`
  font-size: ${typography.fontSize.lg};
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Text = styled.p`
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.gray900};
  margin: 0;
  line-height: ${typography.lineHeight.normal};
`;

interface BannerProps {
  icon?: string;
  text: string;
  onClick?: () => void;
}

export const Banner = ({ icon = '🎉', text, onClick }: BannerProps) => {
  return (
    <BannerContainer onClick={onClick}>
      <Icon>{icon}</Icon>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    </BannerContainer>
  );
};
