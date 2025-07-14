import styled from '@emotion/styled';
import type { OrderInfoValues } from '..';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  background-color: rgb(247, 248, 249);
  border-bottom: 1px solid rgb(238, 239, 241);
`;

const TitleText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid rgb(243, 244, 245);
`;

const DetailText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  margin: 0px;
  text-align: left;
`;

interface ReceiverInfoArrayProps {
  receiverInfos: OrderInfoValues['receiverInfos'];
}

const ReceiverInfoArray = ({ receiverInfos }: ReceiverInfoArrayProps) => {
  return (
    <Container>
      <Category>
        <TitleText>이름</TitleText>
        <TitleText>전화번호</TitleText>
        <TitleText>수량</TitleText>
      </Category>

      {receiverInfos.map((receiver, index) => (
        <Details key={index}>
          <DetailText>{receiver.name}</DetailText>
          <DetailText>{receiver.phoneNumber}</DetailText>
          <DetailText>{receiver.quantity}</DetailText>
        </Details>
      ))}
    </Container>
  );
};

export default ReceiverInfoArray;
