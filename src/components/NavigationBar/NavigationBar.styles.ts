// src/components/NavigationBar/NavigationBar.styles.ts
import styled from '@emotion/styled';

export const Wrapper = styled.header`
  max-width: 700px;
  width: 100%;
  height: 44px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background.default};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.color.text.default};
  flex: 1;
  text-align: center;
`;
