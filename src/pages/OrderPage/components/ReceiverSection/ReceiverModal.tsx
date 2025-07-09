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
import {
  validateReceiverData,
  validatePhoneNumber,
  validateQuantity,
} from "../../utils/validation";

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

export interface Receiver {
  id: string;
  name: string;
  phone: string;
  quantity: string;
  errors: {
    name?: string;
    phone?: string;
    quantity?: string;
  };
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
        errors: {},
      };

      setReceivers((prev) => [...prev, newReceiver]);
    }
  };

  const handleRemoveReceiver = (receiverId: string) => {
    setReceivers((prev) => prev.filter((r) => r.id !== receiverId));
  };

  const updateReceiver = (
    receiverId: string,
    field: keyof Receiver,
    value: string
  ) => {
    setReceivers((prev) =>
      prev.map((r) => {
        if (r.id !== receiverId) return r;

        const updatedReceiver = { ...r, [field]: value };
        const newErrors = { ...r.errors };

        if (field === "name" && value.trim()) {
          delete newErrors.name;
        } else if (
          field === "phone" &&
          value.trim() &&
          validatePhoneNumber(value)
        ) {
          delete newErrors.phone;
        } else if (
          field === "quantity" &&
          value.trim() &&
          validateQuantity(value)
        ) {
          delete newErrors.quantity;
        }

        return { ...updatedReceiver, errors: newErrors };
      })
    );
  };

  const validateAllReceivers = () => {
    if (receivers.length === 0) {
      handleCloseModal();
      return;
    }

    let allValid = true;

    const updatedReceivers = receivers.map((receiver) => {
      const errors = validateReceiverData(receiver);

      if (Object.keys(errors).length > 0) {
        allValid = false;
      }

      return { ...receiver, errors };
    });

    setReceivers(updatedReceivers);

    if (allValid) {
      handleCloseModal();
    }
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
              * 받는 사람의 전화번호를 중복으로 입력할 수 있어요.
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
                index={index}
                totalCount={receivers.length}
                handleRemoveReceiver={handleRemoveReceiver}
                updateReceiver={updateReceiver}
              />
            ))}
          </ReceiverList>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={handleCloseModal}>취소</CancelButton>
          <CompleteButton onClick={validateAllReceivers}>
            {receivers.length}명 완료
          </CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
