import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';

const Container = styled.div`
  margin-top: ${(props) => props.theme.spacing.spacing2};
`;

interface MoreButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick, children }) => {
  return (
    <Container>
      <Button variant="secondary" fullWidth onClick={onClick}>
        {children}
      </Button>
    </Container>
  );
};

export default MoreButton;
