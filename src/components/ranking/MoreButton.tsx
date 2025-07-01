import React from 'react';
import { Button } from '@/components/common';

interface MoreButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick, children }) => {
  return (
    <div style={{ marginTop: '8px' }}>
      <Button variant="secondary" fullWidth onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default MoreButton;
