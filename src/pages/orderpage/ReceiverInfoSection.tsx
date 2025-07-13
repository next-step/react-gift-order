/** @jsxImportSource @emotion/react */
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";
import ReceiverModal from "@/pages/orderpage/ReceiverModal";
import { useState } from "react";
import type { FullOrderFormValues } from "@/utils/validator";

const ReceiverInfoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialReceivers, setInitialReceivers] = useState<
    { name: string; phone: string; quantity: number }[]
  >([]);
  const { setValue, watch } = useFormContext<FullOrderFormValues>();
  const receivers = watch("receivers");

  const handleClickAdd = () => {
    setInitialReceivers([...receivers]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReceiverData = (data: {
    receivers: { name: string; phone: string; quantity: number }[];
  }) => {
    setValue("receivers", data.receivers);
    setIsModalOpen(false);
  };

  return (
    <SectionContainer>
      <HeaderRow>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={handleClickAdd}>
          {receivers.length > 0 ? "수정" : "추가"}
        </AddButton>
      </HeaderRow>

      {receivers.length === 0 ? (
        <EmptyMessage>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
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
            {receivers.map((field, index) => (
              <tr key={index}>
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
          initialReceivers={initialReceivers}
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
  padding: 6px 14px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
`;

const EmptyMessage = styled.div`
  margin-top: 12px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Table = styled.table`
  margin-top: 12px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 12px;
  overflow: hidden;

  thead tr {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 12px 12px 0 0;
  }

  th {
    padding: 16px;
    text-align: left;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
    color: ${({ theme }) => theme.colors.gray1000};
    background-color: ${({ theme }) => theme.colors.gray300};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    border-right: none;
    border-left: none;
    &:first-of-type {
      border-top-left-radius: 12px;
    }
    &:last-of-type {
      border-top-right-radius: 12px;
    }
  }

  td {
    padding: 16px;
    text-align: left;
    font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
    color: ${({ theme }) => theme.colors.gray1000};
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    border-bottom: none;
    border-right: none;
    border-left: none;
  }

  tr:last-of-type td {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export default ReceiverInfoSection;
