import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
`;

export const ThumbContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  gap: 15px;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-gutter: stable;
`;

export const ThumbImgWrapper = styled.div<{ clicked: boolean }>`
  height: 55px;
  border: ${({ clicked }) => (clicked ? '3px solid black' : 'none')};
  border-radius: 8px;
`;

export const ThumbImg = styled.img`
  width: 70px;
  height: 100%;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`;

export const InputTextArea = styled.textarea`
  ${({ theme }) => `
    border: 2px solid ${theme.colors.gray300};
    font-weight: ${theme.typography.title1Regular.fontWeight};
    font-size: ${theme.typography.subtitle1Regular.fontSize};
  `}
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 70px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.gray900};
    outline: none;
  }
`;
