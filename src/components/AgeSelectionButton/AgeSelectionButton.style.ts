import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

export const Button = styled.button<{ selected?: boolean }>`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 20px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.blue700 : theme.colors.blue100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background 0.2s;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Label = styled.span<{ selected?: boolean }>`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ selected, theme }) =>
    selected
      ? theme.typography.body2Bold.fontWeight
      : theme.typography.body2Regular.fontWeight};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.blue700 : theme.colors.gray700};
`;
