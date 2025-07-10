import styled from '@emotion/styled';
import React from 'react';

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  backgroundColor?: string;
  width?: string;
};

const BaseButton = ({
  children,
  onClick,
  type = 'button',
  backgroundColor,
  width,
}: BaseButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export default BaseButton;

const StyledButton = styled.button<{
  backgroundColor?: string;
  width?: string;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.gray300};
  padding: ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing4};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  border: 0;
  cursor: pointer;
  width: ${({ width }) => width || 'auto'};
`;
