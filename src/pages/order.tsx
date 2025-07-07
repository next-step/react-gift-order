import { useState } from 'react';
import { Header } from '../components/common/Header';
import MessageCard from '../components/MessageCard';
import styled from '@emotion/styled';
import { orderCardTemplates } from '../data/orderCardTemplateMock';

const MessaageWrapper = styled.div`
  padding: 8px 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 720px;
`;
const MainImg = styled.img`
  width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const MessageInput = styled.textarea`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SectionBox = styled.div`
  max-width: 720px;
  background-color: white;
  margin: 12px 20px;
  padding: 20px;
`;

const BottomOrderButton = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
  background-color: #ffeb00;
  text-align: center;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Section = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 8px solid #f1f1f1;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const FieldLabel = styled.div`
  width: 80px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  font-size: 14px;

  &::placeholder {
    color: #b0b0b0;
  }
`;

const OrderCustomerInfo = () => {
  return (
    <Wrapper>
      <Section>
        <Label>보내는 사람</Label>
        <Input type="text" placeholder="이름을 입력하세요." />
        <Description>
          * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
        </Description>
      </Section>

      <Section>
        <Label>받는 사람</Label>

        <Row>
          <FieldLabel>이름</FieldLabel>
          <Input type="text" placeholder="이름을 입력하세요." />
        </Row>

        <Row>
          <FieldLabel>전화번호</FieldLabel>
          <Input type="tel" placeholder="전화번호를 입력하세요." />
        </Row>

        <Row>
          <FieldLabel>수량</FieldLabel>
          <Input type="number" defaultValue={1} />
        </Row>
      </Section>
    </Wrapper>
  );
};

const Order = () => {
  const [selected, setSelected] = useState(
    orderCardTemplates[0].imageUrl
  );

  return (
    <>
      <Header></Header>
      <MessaageWrapper>
        <SectionBox>
          {' '}
          <MessageCard
            selected={selected}
            onSelect={setSelected}
          ></MessageCard>
          <MainWrapper>
            <MainImg src={selected} />

            <MessageInput
              placeholder="메시지를 입력해주세요."
              defaultValue="축하해요."
            />
          </MainWrapper>
        </SectionBox>
      </MessaageWrapper>

      <OrderCustomerInfo></OrderCustomerInfo>
      <BottomOrderButton>29000원 주문하기</BottomOrderButton>
    </>
  );
};

export default Order;
