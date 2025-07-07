import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.semantic.background.default};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing5};
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const PreviewImageContainer = styled.div`
  width: 360px;
  height: 240px;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
  background: ${({ theme }) => theme.semantic.background.default};
  box-shadow: 0 0 0 ${({ theme }) => theme.semantic.border.default};
`;
