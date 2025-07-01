import React from 'react';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div<{ fullWidth?: boolean }>`
  width: 100%;
  max-width: ${(props) => (props.fullWidth ? '100%' : '720px')};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.spacing4};

  /* 반응형 패딩 */
  @media (max-width: 480px) {
    padding: 0 ${(props) => props.theme.spacing.spacing3};
  }

  @media (min-width: 600px) {
    padding: 0 ${(props) => props.theme.spacing.spacing6};
  }
`;

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Container = ({ children, fullWidth = false }: ContainerProps) => {
  return <ContainerWrapper fullWidth={fullWidth}>{children}</ContainerWrapper>;
};

export default Container;
