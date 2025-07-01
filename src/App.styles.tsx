import styled from '@emotion/styled';

export const ViewportContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.layout.height.viewport};
  background-color: ${({ theme }) => theme.colors.background.fill};
`;

export const AppFrame = styled.div`
  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  min-height: ${({ theme }) => theme.layout.height.viewport};
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacing[10]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;
