import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import React from 'react';

type FontSizeKey = keyof typeof theme.typography.fontSizes;
type FontWeightKey = keyof typeof theme.typography.fontWeights;

interface TextProps {
  size?: FontSizeKey;
  weight?: FontWeightKey;
  children: React.ReactNode;
}

const Text = ({ size = 'body1', weight = 'regular', children }: TextProps) => {
  return (
    <StyledText size={size} weight={weight}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<{ size: FontSizeKey; weight: FontWeightKey }>`
  font-size: ${({ theme, size }) => theme.typography.fontSizes[size]};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
`;

export default Text;
