import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
  overflow: hidden;
`;
export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  background-color: rgb(247, 248, 249);
  border-bottom: 1px solid rgb(238, 239, 241);
`;

export const ListText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
export const ListBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid rgb(243, 244, 245);
`;
