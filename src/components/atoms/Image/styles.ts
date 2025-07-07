import styled from '@emotion/styled';

export const Image = styled.img<{ variant: 'card' | 'preview' }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  ${({ variant, theme }) => {
    if (variant === 'preview') {
      return `
        border-radius: ${theme.spacing.spacing2};
      `;
    }
    return '';
  }}
`;
