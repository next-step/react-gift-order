// src/components/Layout/Layout.tsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 14px;
`;

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
