import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 32px;
  padding: 30px 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MoreButton = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  margin: 0 auto 10px auto;
`;
