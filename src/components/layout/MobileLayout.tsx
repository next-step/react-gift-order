import React from 'react';
import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 720px; /* Mobile First Design 최대 너비 */
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.semanticColors.background.default};
  position: relative;

  /* 모바일 안전 영역 고려 */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  );
};

export default MobileLayout;
