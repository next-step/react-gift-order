import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing[8]};
  background: ${theme.colors.semanticColor.backgroundColor.default};
`;

export const Title = styled.p`
  ${theme.typography.body1Bold};
  line-height: 0;
`;

export const InfoText = styled.p`
  ${theme.typography.label1Regular};
`;
