import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";
import { useState } from "react";
import Modal from "@src/components/shared/Modal";
import ReceiverModalWindow from "./ReceiverModalWindow";

export type Receiver = {
  id: string;
  receiver: string;
  phoneNumber: string;
  quantity: string;
  duplicate: boolean;
};

function BatchReceiverInput() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<Receiver[]>([]);

  const openModal = () => setOpen(true);

  return (
    <BatchReceiverInputWrapper>
      <TopBarWrapper>
        <TitleP>받는 사람</TitleP>
        <AddButton onClick={openModal}>추가</AddButton>
      </TopBarWrapper>
      <ReceiverPlaceholder>
        받는 사람이 없습니다.
        <br />
        받는 사람을 추가해주세요.
      </ReceiverPlaceholder>
      <Modal open={{ value: open, setValue: setOpen }}>
        <ReceiverModalWindow
          openHooks={{ value: open, setValue: setOpen }}
          listHooks={{ value: list, setValue: setList }}
        />
      </Modal>
    </BatchReceiverInputWrapper>
  );
}

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
