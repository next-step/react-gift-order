import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const inputStyle = css`
  width: 100%;
  box-sizing: border-box;
  color: ${theme.colors.textDefault};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.5rem;
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.borderDefault};
  &:focus {
    outline: none;
    border-color: ${theme.colors.gray700};
  }
`;

const inputErrorStyle = css`
  border-color: red;
`;

const errorText = css`
  font-weight: ${theme.typography.label2Regular.fontWeight};
  font-size: ${theme.typography.label2Regular.fontSize};
  color: red;
  margin-top: 4px;
  margin-bottom: 0;
  text-align: left;
`;

const OrderFormInput = ({ error, ...inputProps }: Props) => {
  return (
    <div>
      <input css={[inputStyle, error && inputErrorStyle]} {...inputProps} />
      {error && <p css={errorText}>{error}</p>}
    </div>
  );
};

export default OrderFormInput;
