import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

export const RankBadge = styled.span<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme, rank }) => rank <= 3 ? theme.colors.red[600] : theme.colors.gray[600]};
  border-radius: 4px;
  ${({ theme }) => theme.typography.label2Bold}
  color: white;
  z-index: 1;
`;

export const Image = styled.img<{ variant: 'category' | 'product' }>`
  width: ${({ variant }) => variant === 'category' ? '52px' : '100%'};
  height: ${({ variant }) => variant === 'category' ? '52px' : 'auto'};
  aspect-ratio: ${({ variant }) => variant === 'category' ? 'auto' : '1'};
  border-radius: 8px;
  margin-bottom: ${({ theme, variant }) => variant === 'category' ? theme.spacing.spacing1 : theme.spacing.spacing2};
  object-fit: cover;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.semantic.text.default};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ProductName = styled.h6`
  ${({ theme }) => theme.typography.body2Regular}
  margin: 0 0 ${({ theme }) => theme.spacing.spacing2} 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const Price = styled.p`
  ${({ theme }) => theme.typography.title2Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin: 0;
  text-align: left;
  word-break: break-word;
  width: 100%;
`; 