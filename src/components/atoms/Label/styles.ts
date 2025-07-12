import styled from '@emotion/styled';

export const Label = styled.p<{ minWidth?: string; variant: 'regular' | 'bold' }>`
  ${({ theme, variant }) => {
    return variant === 'bold' ? theme.typography.label1Bold : theme.typography.label1Regular;
  }};
  color: ${({ theme }) => theme.semantic.text.default};
  margin: 0;
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
`; 