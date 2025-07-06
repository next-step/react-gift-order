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
  // props로 받은 InputProps에는 error 뿐만 아니라 input 태그의 속성들도 있음
  // 그래서 그 속성들을 ... spread operator를 사용해 StyledInput에 전달해줌
  // error={props.error}는 굳이 필요하지 않지만, 동료 개발자가 코드를 읽기 쉽게 하기 위해 추가함
}

export default Input;
