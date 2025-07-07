import styled from '@emotion/styled';

export const StyledItemInfoContainer = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .item-info-text {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
    border: 1px solid black;
    padding: 6px 10px;
    border-radius: 10px;
  }

  .item-info-img {
    width: 70px;
    height: 70px;
    border: 1px solid #eee;
  }
  p {
    margin: 5px 10px;
  }
`;
