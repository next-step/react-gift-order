/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";

const ReceiverTable = () => {
  const { control } = useFormContext<OrderFormValues>();
  const receivers = useWatch({ control, name: "receivers" });

  if (!receivers || receivers.length === 0) return null;

  return (
    <Table>
      <thead>
        <tr>
          <Th>이름</Th>
          <Th>전화번호</Th>
          <Th>수량</Th>
        </tr>
      </thead>
      <tbody>
        {receivers.map((r, index) => (
          <tr key={index}>
            <Td>{r.name}</Td>
            <Td>{r.phone}</Td>
            <Td>{r.quantity}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReceiverTable;

// --- Styled Components ---
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray900};
  padding: 12px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const Td = styled.td`
  padding: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  text-align: center; 
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;
