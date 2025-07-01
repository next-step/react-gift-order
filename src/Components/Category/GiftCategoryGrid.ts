import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 28px 24px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  color: #222;
  gap: 8px;
`;

export const ImageStyle = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 14px;
  object-fit: cover;
`;
