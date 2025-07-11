import styled from '@emotion/styled';
export const GrayBtn = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;
export const YellowBtn = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.yellow.yellow600};
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;
