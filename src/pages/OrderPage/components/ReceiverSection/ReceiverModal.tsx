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
} from "./ReceiverModal.styles";

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

function ReceiverModal({ handleCloseModal }: ReceiverModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <InfoTextContainer>
            <InfoText>* 최대 10명까지 추가할 수 있어요.</InfoText>
            <InfoText>
              * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </InfoText>
          </InfoTextContainer>

          <AddSection>
            <AddSectionButton>추가하기</AddSectionButton>
          </AddSection>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={handleCloseModal}>취소</CancelButton>
          <CompleteButton>0명 완료</CompleteButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReceiverModal;
