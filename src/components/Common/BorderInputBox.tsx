import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.critical : theme.colors.borderDefault};
  padding: ${({ theme }) => theme.spacing.spacing3};
  font-size: ${({ theme }) => theme.font.body1Regular.size};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  border-radius: 12px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    font: ${({ theme }) => theme.font.title1Regular};
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

export const CaptionText = styled.span<{ isError?: boolean }>`
  color: ${({ theme, isError }) =>
    isError ? theme.colors.critical : theme.colors.textSub};
  font-size: ${({ theme }) => theme.font.label2Regular.size};
  margin-top: 4px;
`;
