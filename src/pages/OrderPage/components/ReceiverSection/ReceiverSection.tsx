import RECEIVER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/receiverSection";
import {
  FormContainer,
  ReceiverSection,
  SectionTitle,
} from "./ReceiverSection.styles";
import styled from "@emotion/styled";
import { useState } from "react";
import theme from "@/styles/theme";

const ShowModalButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const ReceiverSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoReceiversLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const NoReceiversContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};

  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing[8]};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.components.modal.backgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 90%;
  max-width: 550px;
  min-height: 80vh;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing[6]};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

const ModalBody = styled.div`
  flex: 1;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

const AddSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const AddSectionButton = styled.button`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 0;
  cursor: pointer;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const CancelButton = styled.button`
  flex: 0.3;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  cursor: pointer;
`;

const CompleteButton = styled.button`
  flex: 0.7;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label1Regular.fontWeight};
  cursor: pointer;
`;

export interface ReceiverSectionProps {
  receiverName: string;
  receiverPhone: string;
  quantity: string;
  onReceiverNameChange: (value: string) => void;
  onReceiverPhoneChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onValidateReceiverName: (value: string) => void;
  onValidateReceiverPhone: (value: string) => void;
  onValidateQuantity: (value: string) => void;
  receiverNameErrorMessage: string;
  receiverPhoneErrorMessage: string;
  quantityErrorMessage: string;
}

function ReceiverSectionComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ReceiverSection>
      <ReceiverSectionHeader>
        <SectionTitle>{RECEIVER_SECTION_CONSTANTS.TITLE}</SectionTitle>
        <ShowModalButton onClick={handleOpenModal}>추가</ShowModalButton>
      </ReceiverSectionHeader>
      <FormContainer>
        <NoReceiversContent>
          <NoReceiversLabel>받는 사람이 없습니다.</NoReceiversLabel>
          <NoReceiversLabel>받는 사람을 추가해주세요.</NoReceiversLabel>
        </NoReceiversContent>
      </FormContainer>
      {showModal && (
        <ModalOverlay>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>받는 사람</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing[1],
                }}
              >
                <InfoText>* 최대 10명까지 추가할 수 있어요.</InfoText>
                <InfoText>
                  * 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
                </InfoText>
              </div>

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
      )}
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
