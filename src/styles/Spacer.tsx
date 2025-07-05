import styled from '@emotion/styled';

export const Spacer = styled.div`
  //NavigationBar가 상단에 fixed될때 다른 컴포넌트를 가리는 문제르 해결하기 위한 공백 공간
  height: 55px;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
