import { useState } from "react";
import {
  SectionTitle,
  FormContainer,
  FormField,
  FieldLabel,
} from "./ReceiverSection.styles";
import RECEIVER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/receiverSection";
import Input from "@/components/common/Input/Input";
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
import styled from "@emotion/styled";

const ReceiverList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  max-height: 520px;
  overflow-y: auto;
`;

const ReceiverInputContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const RemoveButton = styled.button`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ReceiverInputHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

interface ReceiverModalProps {
  handleCloseModal: () => void;
}

function ReceiverModal({ handleCloseModal }: ReceiverModalProps) {
  const [receiverCount, setReceiverCount] = useState(0);

  const handleAddReceiver = () => {
    setReceiverCount(receiverCount + 1);
  };

  const handleRemoveReceiver = () => {
    setReceiverCount(receiverCount - 1);
  };

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
            <AddSectionButton onClick={handleAddReceiver}>
              추가하기
            </AddSectionButton>
          </AddSection>
          <ReceiverList>
            {Array.from({ length: receiverCount }, (_, index) => (
              <ReceiverInputContainer key={index}>
                <ReceiverInputHeader>
                  <SectionTitle>
                    {RECEIVER_SECTION_CONSTANTS.TITLE}
                  </SectionTitle>
                  <RemoveButton onClick={handleRemoveReceiver}>X</RemoveButton>
                </ReceiverInputHeader>
                <FormContainer>
                  <FormField>
                    <FieldLabel>
                      {RECEIVER_SECTION_CONSTANTS.NAME_LABEL}
                    </FieldLabel>
                    <Input
                      type="text"
                      placeholder={RECEIVER_SECTION_CONSTANTS.NAME_PLACEHOLDER}
                      //   value={receiverName}
                      onChange={() => {}}
                      //   hasError={hasReceiverNameError}
                      errorMessage={""}
                    />
                  </FormField>
                  <FormField>
                    <FieldLabel>
                      {RECEIVER_SECTION_CONSTANTS.PHONE_LABEL}
                    </FieldLabel>
                    <Input
                      type="tel"
                      placeholder={RECEIVER_SECTION_CONSTANTS.PHONE_PLACEHOLDER}
                      //   value={receiverPhone}
                      onChange={() => {}}
                      errorMessage={""}
                    />
                  </FormField>
                  <FormField>
                    <FieldLabel>
                      {RECEIVER_SECTION_CONSTANTS.QUANTITY_LABEL}
                    </FieldLabel>
                    <Input
                      type="number"
                      min="1"
                      placeholder={
                        RECEIVER_SECTION_CONSTANTS.QUANTITY_PLACEHOLDER
                      }
                      //   value={quantity}
                      onChange={() => {}}
                      errorMessage={""}
                    />
                  </FormField>
                </FormContainer>
                {index !== receiverCount - 1 && <Divider />}
              </ReceiverInputContainer>
            ))}
          </ReceiverList>
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
