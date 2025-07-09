import RECEIVER_SECTION_CONSTANTS from "@/pages/OrderPage/constants/receiverSection";
import {
  FormContainer,
  ReceiverSection,
  SectionTitle,
  ShowModalButton,
} from "./ReceiverSection.styles";
import { useState } from "react";
import {
  ReceiverSectionHeader,
  NoReceiversContent,
  NoReceiversLabel,
} from "./ReceiverModal.styles";
import ReceiverModal from "./ReceiverModal";

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
      {showModal && <ReceiverModal handleCloseModal={handleCloseModal} />}
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
