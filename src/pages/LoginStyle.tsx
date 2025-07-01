
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

export const Input = styled.input`
  width: 80%;
  padding: ${spaces.sm} 0;
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.body};
  border: none;
  border-bottom: 1px solid ${colors.surface};
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.text};
  }
`;

export const Button = styled.button`
  width: 80%;
  padding: ${spaces.sm};
  background: ${colors.kakaomain};
  color: ${colors.text};
  font-size: ${fontSizes.body};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${spaces.md};

  &:hover {
    opacity: 0.9;
  }
`;
