import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  height?: string;
}

const Button = ({
  icon,
  children,
  onClick,
  backgroundColor,
  height = '74px',
}: ButtonProps) => {
  return (
    <Wrapper>
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        height={height}
      >
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <Text>{children}</Text>
      </StyledButton>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  width: 100%;
`;

const StyledButton = styled.button<{
  backgroundColor?: string;
  height: string;
}>`
  width: 100%;
  height: ${({ height }) => height};
  border: none;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.color.semantic.background.default};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border-radius: 16px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.gray[200]};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.yellow[600]};
  border-radius: 16px;
  color: ${({ theme }) => theme.color.gray[700]};
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.body.body1Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;
