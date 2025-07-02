
import styled from '@emotion/styled';
import { spaces, colors, fontSizes } from '@/tokens/designTokens';

export const Wrap = styled.div`
  max-width: 720px;
  margin: 4rem auto;
  padding: ${spaces.md};
  text-align: center;
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto ${spaces.lg};
  width: 100px;
  height: auto;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 80%;
  padding: ${spaces.sm} 0;
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.body};
  border: none;
  border-bottom: 1px solid ${({ hasError }) => (hasError ? colors.error : colors.surface)};
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.text};
  }
`;



export const ErrorMsg = styled.div`
  height: 1.25rem;
  font-size: 0.875rem;
  color: ${colors.error};
  margin-bottom: ${spaces.sm};
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 80%;
  padding: ${spaces.sm};
  background: ${colors.kakaomain};
  color: white;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

`;

