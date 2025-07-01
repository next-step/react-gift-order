import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 32px;
  padding: 30px 20px;
`;