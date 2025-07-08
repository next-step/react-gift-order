import styled from '@emotion/styled';

export const Container = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputRow = styled.div<{ layout: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ layout }) => layout === 'vertical' ? 'column' : 'row'};
  align-items: ${({ layout }) => layout === 'horizontal' ? 'center' : 'flex-start'};
  gap: ${({ theme, layout }) => layout === 'horizontal' ? theme.spacing.spacing3 : theme.spacing.spacing2};
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.span<{ 
  layout: 'vertical' | 'horizontal';
  labelMinWidth?: string;
}>`
  color: ${({ theme }) => theme.colors.red[700]};
  ${({ theme }) => theme.typography.label2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-left: ${({ layout, labelMinWidth, theme }) => 
    layout === 'horizontal' && labelMinWidth 
      ? `calc(${labelMinWidth} + ${theme.spacing.spacing3})` 
      : '0'
  };
  display: block;
`; 