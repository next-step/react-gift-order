import styled from '@emotion/styled';

const Layout = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export default Layout;