import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  width: 100%;
  padding: ${spacing.lg} ${spacing.xl};
  border: none;
  border-radius: ${borderRadius.md};
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === 'primary' &&
    `
    background: ${colors.primary};
    color: ${colors.white};
    
    &:hover {
      background: #2668e6;
    }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background: ${colors.gray200};
    color: ${colors.gray700};
    
    &:hover {
      background: ${colors.gray300};
    }
  `}
`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ children, variant = 'primary', onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
