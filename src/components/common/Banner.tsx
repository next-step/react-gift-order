import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import type { Theme } from '@/styles/theme';

interface BannerProps {
  children: ReactNode;
  backgroundColor?: string;
  spacingBottom?: keyof Theme['spacing'];
}

const Banner = ({
  children,
  backgroundColor,
  spacingBottom = 8,
}: BannerProps) => {
  return (
    <Section spacingBottom={spacingBottom}>
      <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>
    </Section>
  );
};

export default Banner;

const Section = styled.section<{ spacingBottom: keyof Theme['spacing'] }>`
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme, spacingBottom }) => theme.spacing[spacingBottom]};
`;

const Wrapper = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.color.semantic.kakaoYellow};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing[4]};
`;
