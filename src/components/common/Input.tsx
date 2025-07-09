import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 16px 0;
  border: none;
  border-bottom: 1.5px solid ${({ error }) => (error ? '#f44336' : '#ddd')};
  font-size: 16px;
  background: transparent;
  color: #222;
  outline: none;
  &::placeholder {
    color: #bbb;
  }
`;

function Input(props: InputProps) {
  // error prop을 StyledInput에 전달
  return <StyledInput {...props} error={props.error} />;
}

export default Input;
