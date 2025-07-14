import {
  DefaultComponentDiv,
  EmptyDiv12h,
  EmptyDiv24h,
  EmptyDiv8h,
  FlatLowField,
  ListBody,
  ListTop,
  LowField,
  ReceiverEmpty,
  ReceiverList,
  SideBlankDiv,
  SimpleButton,
  SubText,
  SubTitle,
} from '@/styles/Common.styled';
import { useState } from 'react';
import ReceiverModal from './ReceiverModal';
import { useReceiver } from '@/context/ReceiverContext';

const Receiver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { receivers } = useReceiver();
  return (
    <DefaultComponentDiv>
      <EmptyDiv8h />
      <SideBlankDiv>
        <FlatLowField>
          <SubTitle>받는 사람</SubTitle>
          <SimpleButton onClick={() => setIsOpen(true)}>추가</SimpleButton>
        </FlatLowField>
        <EmptyDiv12h />

        {receivers.length == 0 ? (
          <ReceiverEmpty>
            <SubText style={{ textAlign: 'center' }}>
              받는 사람이 없습니다 <br />
              받는사람을 추가해주세요
            </SubText>
          </ReceiverEmpty>
        ) : (
          <ReceiverList>
            <ListTop>
                <p>이름</p>
                <p>전화번호</p>
                <p>수량</p>
                
            </ListTop>
            {receivers.map((receiver, i) => (
              <ListBody key={i}>
                <p>{receiver.name}</p> 
                <p>{receiver.phone} </p>
                <p>{receiver.count}</p>
              </ListBody>
            ))}
          </ReceiverList>
        )}

        <ReceiverModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <EmptyDiv8h />
      </SideBlankDiv>
      <EmptyDiv24h />
    </DefaultComponentDiv>
  );
};

export default Receiver;
