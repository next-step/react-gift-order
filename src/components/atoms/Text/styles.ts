import styled from '@emotion/styled';

export const Text = styled.p<{ variant: 'body' | 'caption' | 'description' }>`
  margin: 0;
  
  ${({ theme, variant }) => {
    switch (variant) {
      case 'caption':
        return theme.typography.label2Regular;
      case 'description':
        return theme.typography.body2Regular;
      default:
        return theme.typography.body1Regular;
    }
  }}
  
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'caption':
      case 'description':
        return theme.semantic.text.sub;
      default:
        return theme.semantic.text.default;
    }
  }};
`; 