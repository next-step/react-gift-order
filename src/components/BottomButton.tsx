import styled from '@emotion/styled';

const BottomButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 100;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.kakaoYellowHover || theme.color.kakaoYellow};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.gray500};
    cursor: not-allowed;
  }
`;

export default BottomButton;
