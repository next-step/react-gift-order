import styled from '@emotion/styled';

export const VerticalSpacing = styled.div<{ size: string; backgroundColor?: string }>`
  height: ${({ size }) => size};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;
