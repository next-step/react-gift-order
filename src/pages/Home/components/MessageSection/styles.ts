import styled from '@emotion/styled';

// 리뷰1 section에서 div로 변경
export const Div = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const MessageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border-radius: 12px;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body2Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray[700]};
`; 