import React from 'react';
import styled from '@emotion/styled';

const MainWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS 부드러운 스크롤 */
`;

const MainContent = styled.div`
  padding: 0 ${(props) => props.theme.spacing.spacing4};
  padding-bottom: ${(props) => props.theme.spacing.spacing8}; /* 하단 여백 */
`;

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <MainWrapper>
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};

export default Main;
