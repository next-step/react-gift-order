import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${theme.spacing[12]};
  background-color: ${theme.colors.semanticColor.backgroundColor.default};
  min-height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  padding: ${theme.spacing[6]};
  background-color: ${theme.colors.semanticColor.backgroundColor.default};
`;

export const KakaoTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: ${theme.spacing[8]};
`;

export const InputForm = styled.input`
  width: 100%;
  height: ${theme.spacing[13]};
  margin-bottom: ${theme.spacing[3]};

  ${theme.typography.subtitle1Regular};
  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.colors.colorScale.gray[600]};

  transition: 0.2s ease border-color;
  &:focus {
    border-bottom: 1px solid ${theme.colors.colorScale.gray[800]};
  }

  &::placeholder {
    color: ${theme.colors.colorScale.gray[600]};
  }
`;
