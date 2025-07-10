import {
  RECEIVER_SECTION_CONSTANTS,
  RECEIVER_MODIFIY_BUTTON,
} from "@/pages/OrderPage/constants/receiverSection";
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
import {
  ReceiverTable,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./ReceiverTable";
import type { Receiver } from "../../hooks/useOrderForm";
import { TABLE_CELL_CONSTANTS } from "../../constants/table";

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
          <NoReceiversContent>
            <NoReceiversLabel>
              {RECEIVER_SECTION_CONSTANTS.NO_RECEIVERS_MESSAGE}
            </NoReceiversLabel>
            <NoReceiversLabel>
              {RECEIVER_SECTION_CONSTANTS.ADD_RECEIVER_GUIDE}
            </NoReceiversLabel>
          </NoReceiversContent>
        ) : (
          <ReceiverTable>
            <TableHeader>
              <TableHeaderCell>{TABLE_CELL_CONSTANTS.NAME}</TableHeaderCell>
              <TableHeaderCell>{TABLE_CELL_CONSTANTS.PHONE}</TableHeaderCell>
              <TableHeaderCell>{TABLE_CELL_CONSTANTS.QUANTITY}</TableHeaderCell>
            </TableHeader>
            {receivers.map((receiver) => (
              <TableRow key={receiver.phone}>
                <TableCell>{receiver.name}</TableCell>
                <TableCell>{receiver.phone}</TableCell>
                <TableCell>{receiver.quantity}</TableCell>
              </TableRow>
            ))}
          </ReceiverTable>
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
