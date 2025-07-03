import type { Theme } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  css: SerializedStyles;
  message: string;
}

const Input = ({
  type,
  placeholder,
  css,
  onBlur,
  onChange,
  message,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        css={css}
      />
      <p css={errorMessageStyle}>{message}</p>
    </div>
  );
};

const errorMessageStyle = (theme: Theme) => css`
  color: ${theme.colors.red.red700};
  font-size: ${theme.typography.label2Regular.size};
  margin-top: ${theme.spacing.spacing1};
`;

export default Input;
