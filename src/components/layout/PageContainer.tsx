//max-width: 720px, padding
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  box-sizing: border-box;
`;
