import styled from '@emotion/styled';

import type { ReactNode } from 'react';

const LayoutStyle = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;