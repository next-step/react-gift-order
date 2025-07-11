import styled from '@emotion/styled';

const Layout = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray.gray00};

  position: relative;
`;

export default Layout;
