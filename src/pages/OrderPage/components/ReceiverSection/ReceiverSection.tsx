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
import styled from "@emotion/styled";

const ReceiverTable = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.background.default};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

const TableHeaderCell = styled(TableCell)`
  font-weight: ${({ theme }) => theme.typography.body.body2Bold.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.body2Bold.fontSize};
  color: ${({ theme }) => theme.colors.text.default};
`;

export interface Receiver {
  name: string;
  phone: string;
  quantity: string;
}

function ReceiverSectionComponent() {
  const [receivers, setReceivers] = useState<Receiver[]>([
    {
      name: "홍길동",
      phone: "01012345678",
      quantity: "1",
    },
  ]);

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
        <ShowModalButton onClick={handleOpenModal}>수정</ShowModalButton>
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
              <TableHeaderCell>이름</TableHeaderCell>
              <TableHeaderCell>전화번호</TableHeaderCell>
              <TableHeaderCell>수량</TableHeaderCell>
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
