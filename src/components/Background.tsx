import styled from '@emotion/styled';
import theme from '@src/styles/tokens/index';

const Background = styled.div`
  background-color: ${theme.colors.gray100};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: Canvas;
`;

export default Background;
