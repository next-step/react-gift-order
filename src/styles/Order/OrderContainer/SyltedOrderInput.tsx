import styled from '@emotion/styled';
import type { HasErrorProp } from '@src_types/hasError';

//error 구문 존재시 스타일적 변경을 위한 HasErrorProp 타입 사용
export const SyltedOrderInput = styled.input<HasErrorProp>`
  padding: 6px 12px;
  width: 90%;
  &:focus {
    outline: none;
  }
`;
