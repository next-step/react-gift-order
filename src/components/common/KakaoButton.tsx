import styled from '@emotion/styled';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

const Btn = styled.button<{ fullWidth?: boolean }>`
  ${({ theme }) => theme.typography.body2Regular};
  height: 44px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '160px')};
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.kakaoBrown};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
`;

export default function KakaoButton({ children, fullWidth, ...rest }: Props) {
  return (
    <Btn fullWidth={fullWidth} {...rest}>
      {children}
    </Btn>
  );
}
