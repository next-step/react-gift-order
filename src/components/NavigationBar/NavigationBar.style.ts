import styled from "@emotion/styled";

export const NavBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textDefault};
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
`;
