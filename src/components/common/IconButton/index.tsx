import { type ReactNode } from 'react';
import * as S from './styles';

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const IconButton = ({children, onClick}: IconButtonProps) => {
  return (
    <S.IconButton 
      onClick={onClick} 
    >
      {children}
    </S.IconButton>
  );
};

export default IconButton;

