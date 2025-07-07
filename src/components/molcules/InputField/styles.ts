import styled from '@emotion/styled';

export const Container = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ layout }) => layout === 'vertical' ? 'column' : 'row'};
  align-items: ${({ layout }) => layout === 'horizontal' ? 'center' : 'flex-start'};
  gap: ${({ theme, layout }) => layout === 'horizontal' ? theme.spacing.spacing3 : theme.spacing.spacing2};
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
`; 