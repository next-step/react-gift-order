import styled from '@emotion/styled';

export const ItemlistContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemContainerStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  align-items: center;
  padding: 5px;
`;
