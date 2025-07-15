import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  padding: 16px;
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

export const Input = styled.input`
  width: 100%;
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
font-size: font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

export const SectionDivider = styled.hr`
  border: none;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
