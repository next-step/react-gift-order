import {
  RECEIVER_SECTION_CONSTANTS,
  RECEIVER_MODIFIY_BUTTON,
} from "@/pages/OrderPage/constants/receiverSection";
import {
  FormContainer,
  ReceiverSection,
  SectionTitle,
  ShowModalButton,
  ReceiverSectionHeader,
} from "./ReceiverSection.styles";
import { useState } from "react";
import ReceiverModal from "./ReceiverModal/ReceiverModal";
import ReceiverTable from "./ReceiverTable/ReceiverTable";
import NoReceiver from "./NoReceiver/NoReceiver";
import type { Receiver } from "../../hooks/useOrderForm";

interface ReceiverSectionComponentProps {
  receivers: Receiver[];
  setReceivers: (receivers: Receiver[]) => void;
}

function ReceiverSectionComponent({
  receivers,
  setReceivers,
}: ReceiverSectionComponentProps) {
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
          {RECEIVER_MODIFIY_BUTTON}
        </ShowModalButton>
      </ReceiverSectionHeader>
      <FormContainer>
        {receivers.length === 0 ? (
          <NoReceiver />
        ) : (
          <ReceiverTable receivers={receivers} />
        )}
      </FormContainer>
      {showModal && (
        <ReceiverModal
          handleCloseModal={handleCloseModal}
          receivers={receivers}
          setReceivers={setReceivers}
        />
      )}
    </ReceiverSection>
  );
}

export default ReceiverSectionComponent;
