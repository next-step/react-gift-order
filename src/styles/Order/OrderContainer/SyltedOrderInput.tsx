import styled from '@emotion/styled';

//error 구문 존재시 스타일적 변경을 위한 HasErrorProp 타입 사용
export const SyltedOrderInput = styled.input`
  padding: 6px 12px;
  width: 90%;
  &:focus {
    outline: none;
  }
`;
