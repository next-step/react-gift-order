import React from 'react';
import styled from '@emotion/styled';

type InputBoxProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  isError?: boolean;
};

const BorderInputBox = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  message,
  isError = false,
}: InputBoxProps) => {
  return (
    <Wrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={isError}
      />
      {message && <CaptionText isError={isError}>{message}</CaptionText>}
    </Wrapper>
  );
};

export default BorderInputBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? theme.colors.critical : theme.colors.gray500)};
  padding: ${({ theme }) => theme.spacing.spacing3};
  font-size: ${({ theme }) => theme.font.body1Regular.size};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  border-radius: 12px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    font: ${({ theme }) => theme.font.title1Regular};
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const CaptionText = styled.span<{ isError: boolean }>`
  color: ${({ isError, theme }) => (isError ? theme.colors.critical : theme.colors.gray600)};
  font-size: ${({ theme }) => theme.font.label2Regular.size};
  margin-top: 4px;
`;
