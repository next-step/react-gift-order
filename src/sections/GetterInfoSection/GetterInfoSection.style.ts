import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

export const InputLabel = styled.label`
  min-width: 80px;
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Input = styled.input`
  flex: 1 1 0;
  padding: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;
