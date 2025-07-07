import styled from '@emotion/styled';

export const StyledOrderButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  color: black;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 720px;
`;
