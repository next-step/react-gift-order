import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background: ${theme.colors.semanticColor.backgroundColor.default};
`;

export const Title = styled.p`
  ${theme.typography.body1Bold};
  line-height: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`;

export const Divider = styled.div`
  border-top: 1px solid ${theme.colors.colorScale.gray[500]};
  margin-top: ${theme.spacing[7]};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[3]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  ${theme.typography.label2Regular};
  margin-bottom: ${theme.spacing[1]};
`;

export const InputText = styled.input<{ isError?: boolean }>`
  border: 1px solid
    ${({ isError }) =>
      isError
        ? theme.colors.semanticColor.stateColor.critical
        : theme.colors.colorScale.gray[300]};
  padding: ${theme.spacing[2]};
  border-radius: 8px;
  font-size: 14px;
`;

export const ErrorText = styled.p`
  color: ${theme.colors.semanticColor.stateColor.critical};
  ${theme.typography.label2Regular};
  margin-top: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[0]};
`;
