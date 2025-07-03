import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';

type LoginInputProps = {
  name: 'email' | 'password';
  type: 'email' | 'password';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error: string;
};

const inputDiv = css`
  margin: ${theme.spacing.spacing0};
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
  font: inherit;
`;

const inputStyle = (hasError: boolean) => css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.gray900};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  padding: 8px 0px;
  border-width: 0px 0px 1px;
  border-color: ${hasError ? theme.colors.red700 : theme.colors.textDisabled};

  &:focus {
    outline: none;
    border-color: ${theme.colors.gray700};
  }

  &::placeholder {
    color: ${theme.colors.textPlaceholder};
    opacity: 1;
  }
`;

const errorMessageStyle = css`
  color: ${theme.colors.red700};
  font-size: ${theme.typography.label2Regular.fontSize};
  margin-top: ${theme.spacing.spacing1};
`;

const LoginInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: LoginInputProps) => {
  return (
    <div css={inputDiv}>
      <input
        css={inputStyle(!!error)}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p css={errorMessageStyle}>{error}</p>}
    </div>
  );
};

export default LoginInput;
