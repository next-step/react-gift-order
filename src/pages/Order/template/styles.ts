import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.semantic.background.fill};
`;

export const FirstSection = styled.div`
  background-color: ${({ theme }) => theme.semantic.background.default};
  border: 1px solid ${({ theme }) => theme.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.spacing2};
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.spacing5} 0;
`;

export const PreviewImageContainer = styled.div`
  width: 360px;
  height: 240px;
  overflow: hidden;
  background: ${({ theme }) => theme.semantic.background.default};
`;
