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
        <ShowModalButton onClick={handleOpenModal}>
          {RECEIVER_SECTION_CONSTANTS.ADD_BUTTON}
        </ShowModalButton>
      </ReceiverSectionHeader>
      <FormContainer>
        <NoReceiversContent>
          <NoReceiversLabel>
            {RECEIVER_SECTION_CONSTANTS.NO_RECEIVERS_MESSAGE}
          </NoReceiversLabel>
          <NoReceiversLabel>
            {RECEIVER_SECTION_CONSTANTS.ADD_RECEIVER_GUIDE}
          </NoReceiversLabel>
        </NoReceiversContent>
      </FormContainer>
      {showModal && <ReceiverModal handleCloseModal={handleCloseModal} />}
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
