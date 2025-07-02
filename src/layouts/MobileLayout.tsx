import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
`;

export default function MobileLayout({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}
