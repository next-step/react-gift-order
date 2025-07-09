import { useState } from "react";
import {
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalBody,
  InfoText,
  AddSection,
  AddSectionButton,
  ModalFooter,
  CancelButton,
  CompleteButton,
  InfoTextContainer,
  ReceiverList,
} from "./ReceiverModal.styles";
import ReceiverForm from "./ReceiverForm";

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

export interface Receiver {
  id: string;
  name: string;
  phone: string;
  quantity: string;
}

const MAX_RECEIVERS = 10;

function ReceiverModal({ handleCloseModal }: ReceiverModalProps) {
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  const handleAddReceiver = () => {
    if (receivers.length < MAX_RECEIVERS) {
      const newReceiver: Receiver = {
        id: `receiver-${Date.now()}`,
        name: "",
        phone: "",
        quantity: "",
      };
      setReceivers([...receivers, newReceiver]);
    }
  };

  const handleRemoveReceiver = (receiverId: string) => {
    setReceivers(receivers.filter((receiver) => receiver.id !== receiverId));
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InfoTextContainer>
            <InfoText>* 최대 {MAX_RECEIVERS}명까지 추가할 수 있어요.</InfoText>
            <InfoText>
              * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </InfoText>
          </InfoTextContainer>

          <AddSection>
            <AddSectionButton onClick={handleAddReceiver}>
              추가하기
            </AddSectionButton>
          </AddSection>

          <ReceiverList>
            {receivers.map((receiver, index) => (
              <ReceiverForm
                key={receiver.id}
                receiver={receiver}
                receivers={receivers}
                index={index}
                handleRemoveReceiver={handleRemoveReceiver}
              />
            ))}
          </ReceiverList>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={handleCloseModal}>취소</CancelButton>
          <CompleteButton>{receivers.length}명 완료</CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
