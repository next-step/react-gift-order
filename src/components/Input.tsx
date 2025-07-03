import type { SerializedStyles } from "@emotion/react";

{
  /* <input
          onChange={email.onChange}
          onBlur={email.onBlur}
          css={inputStyle(theme)}
          type="text"
          placeholder="이메일"
        /> */
}

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
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
      <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{message}</p>
    </div>
  );
};

export default Input;
