import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.semanticColors.background.default};
  border-bottom: 1px solid
    ${(props) => props.theme.semanticColors.border.default};

  /* 모바일 상단 안전 영역 고려 */
  padding-top: env(safe-area-inset-top);
`;

const HeaderContent = styled.div`
  padding: ${(props) => props.theme.spacing.spacing4}
    ${(props) => props.theme.spacing.spacing4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px; /* 최소 터치 영역 보장 */
`;

const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.title2Bold.fontWeight};
  line-height: ${(props) => props.theme.typography.title2Bold.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin: 0;
`;

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header = ({ title = '카카오 선물하기', children }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        {children}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
