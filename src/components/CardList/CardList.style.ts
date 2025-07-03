import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  justify-items: center;
`;
