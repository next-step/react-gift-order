import styled from '@emotion/styled';
import { useState } from 'react';
import useInput from '../hooks/useInput';
import useCheckAmount from '../hooks/useCheckAmount';
import ReceiverAdded from './ReceiverAdded';

const ModalBackGround = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 300ms,
    visibility 300ms;
  padding: 16px;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 8px;
  max-height: calc(-7.5rem + 100vh);
  max-width: 37.5rem;
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoArea = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const TitleText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const DetailInfoText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(85, 93, 109);
  margin: 0px;
  text-align: left;
`;

const ButtonAdd = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
`;

const ButtonArea = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  width: 100%;
  flex: 1 1 0%;
`;

const ButtonAddDone = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(254, 229, 0);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  flex: 3 1 0%;
`;

const ButtonCancel = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: rgb(238, 239, 241);
  border: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    opacity 200ms;
  flex: 1 1 0%;
`;

interface Receiver {
  id: number;
}
interface ReceiverModalProps {
  onClick: () => void;
}

const ReceiverModal = ({ onClick }: ReceiverModalProps) => {
  const receiverName = useInput<HTMLInputElement>('text');
  const receiverPhoneNumber = useInput<HTMLInputElement>('phoneNumber');
  const receiverAmount = useCheckAmount();
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<Receiver[]>([]);

  const handleAddClick = () => {
    setUsers(prev => [
      ...prev,
      { id: Date.now() }, // 고유 key용 id
    ]);
    setCount(count => count + 1);
  };

  const handleFinishClick = () => {
    receiverName.validate();
    receiverPhoneNumber.validate();
    receiverAmount.validate();
  };
  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalContainer>
          <InfoArea>
            <TitleText>받는사람</TitleText>
            <DetailInfoText>
              * 최대 10명까지 추가 할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </DetailInfoText>
            <ButtonAdd onClick={handleAddClick}>추가하기</ButtonAdd>
          </InfoArea>

          <ReceiverAdded
            users={users}
            nameHook={receiverName}
            numberHook={receiverPhoneNumber}
            amountHook={receiverAmount}
          />

          <ButtonArea>
            <ButtonCancel onClick={onClick}>취소</ButtonCancel>
            <ButtonAddDone onClick={handleFinishClick}>{count}명 완료</ButtonAddDone>
          </ButtonArea>
        </ModalContainer>
      </ModalWrapper>
    </ModalBackGround>
  );
};
export default ReceiverModal;
