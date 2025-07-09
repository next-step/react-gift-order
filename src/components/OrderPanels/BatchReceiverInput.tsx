import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";
import { useState } from "react";
import Modal from "@src/components/shared/Modal";
import ReceiverModalWindow from "./ReceiverModalWindow";
import type { FormType, Receiver } from "@src/pages/OrderPage";
import { useFormContext, useWatch } from "react-hook-form";

function BatchReceiverInput() {
  const [open, setOpen] = useState(false);

  const { control } = useFormContext<FormType>();

  const openModal = () => setOpen(true);

  const receivers = useWatch({
    control,
    name: "receivers"
  });

  return (
    <BatchReceiverInputWrapper>
      <TopBarWrapper>
        <TitleP>받는 사람</TitleP>
        <AddButton type="button" onClick={openModal}>
          {receivers.length === 0 ? "추가" : "수정"}
        </AddButton>
      </TopBarWrapper>
      {receivers.length === 0 ? (
        <ReceiverPlaceholder>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
        </ReceiverPlaceholder>
      ) : (
        <RTable fields={receivers} />
      )}
      <Modal open={{ value: open, setValue: setOpen }}>
        <ReceiverModalWindow openHooks={{ value: open, setValue: setOpen }} />
      </Modal>
    </BatchReceiverInputWrapper>
  );
}

function RTable({ fields }: { fields: Receiver[] }) {
  return (
    <ReceiverTable>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) => (
          <tr key={field.id}>
            <td>{field.name}</td>
            <td>{field.phoneNumber}</td>
            <td>{field.quantity}</td>
          </tr>
        ))}
      </tbody>
    </ReceiverTable>
  );
}

const ReceiverTable = styled.table`
  border: 1px solid ${theme.colors.gray.gray400};
  border-radius: 10px;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    font-size: 14px;
    background-color: ${theme.colors.gray.gray300};
    text-align: left;
  }

  tbody > tr > td,
  thead > tr > th {
    padding: 10px;
  }

  tbody tr td {
    border-top: 1px solid ${theme.colors.gray.gray400};
  }
`;

const AddButton = styled.button`
  margin: 10px;
  height: 35px;
  width: 70px;
  border: none;
  border-radius: 10px;
`;

const ReceiverPlaceholder = styled.div`
  color: ${theme.colors.gray.gray500};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.gray.gray400};
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`;

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//Change calc values as well when changing width value
const BatchReceiverInputWrapper = styled.div`
  width: calc(100% - 2 * 15px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
`;

const TitleP = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  margin: 10px;
`;

export default BatchReceiverInput;
