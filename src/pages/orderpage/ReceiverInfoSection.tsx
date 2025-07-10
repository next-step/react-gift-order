/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import ReceiverModal from "./ReceiverModal";

const ReceiverInfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickAdd = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReceiverData = (data: {
    receivers: { name: string; phone: string; quantity: number }[];
  }) => {
    console.log("Received data:", data);
    setIsModalOpen(false);
    // TODO: store in parent via callback or form state
  };

  return (
    <SectionContainer>
      <HeaderRow>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={handleClickAdd}>
          추가
        </AddButton>
      </HeaderRow>
      <EmptyMessage>
        받는 사람이 없습니다. 받는 사람을 추가해주세요.
      </EmptyMessage>

      {isModalOpen && (
        <ReceiverModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitReceiverData}
        />
      )}
    </SectionContainer>
  );
};

const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  text-align: left;
`;

const SectionContainer = styled.div`
  margin-top: 15px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: white;
  cursor: pointer;
`;

const EmptyMessage = styled.div`
  margin-top: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

export default ReceiverInfoSection;
