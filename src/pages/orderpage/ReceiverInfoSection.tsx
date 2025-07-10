/** @jsxImportSource @emotion/react */
import { useFormContext, useFieldArray } from "react-hook-form";
import styled from "@emotion/styled";
import ReceiverModal from "@/pages/orderpage/ReceiverModal";
import { useState } from "react";
import type { FullOrderFormValues } from "@/utils/validator";

const ReceiverInfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, watch } = useFormContext<FullOrderFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers",
  });

  const handleClickAdd = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReceiverData = (data: {
    receivers: { name: string; phone: string; quantity: number }[];
  }) => {
    data.receivers.forEach((receiver) => append(receiver));
    setIsModalOpen(false);
  };

  return (
    <SectionContainer>
      <HeaderRow>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={handleClickAdd}>
          {fields.length > 0 ? "수정" : "추가"}
        </AddButton>
      </HeaderRow>

      {fields.length === 0 ? (
        <EmptyMessage>
          받는 사람이 없습니다. 받는 사람을 추가해주세요.
        </EmptyMessage>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td>{field.name}</td>
                <td>{field.phone}</td>
                <td>{field.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

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
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray300};
    cursor: not-allowed;
  }
`;

const EmptyMessage = styled.div`
  margin-top: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

const Table = styled.table`
  margin-top: 12px;
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;

export default ReceiverInfoSection;
