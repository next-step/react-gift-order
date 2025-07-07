import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";
import type { StateHook } from "@src/hooks/stateHookType";
import ReceiverInputBox from "./ReceiverInputBox";
import { useEffect, useState } from "react";

type ReceiverModalWindowProps = {
  open: StateHook<boolean>;
};

type Receiver = {
  id: string;
  receiver: string;
  phoneNumber: string;
  quantity: string;
  duplicate: boolean;
};

function ReceiverModalWindow({ open }: ReceiverModalWindowProps) {
  const [list, setList] = useState<Receiver[]>([]);

  const closeModal = () => open.setValue(false);

  const commit = () => {
    //commit logic
    closeModal();
  };

  const ADD_LIMIT = 10;
  const add = () => {
    if (list.length >= ADD_LIMIT) return;
    const newReceiver: Receiver = {
      id: crypto.randomUUID(),
      receiver: "",
      phoneNumber: "",
      quantity: "",
      duplicate: false
    };
    setList((prev) => [...prev, newReceiver]);
  };

  useEffect(() => {
    const phoneMap = new Map<string, number>();

    list.forEach(({ phoneNumber }) => {
      if (!phoneNumber) return;
      phoneMap.set(phoneNumber, (phoneMap.get(phoneNumber) || 0) + 1);
    });

    setList((prev) =>
      prev.map((receiver) => ({
        ...receiver,
        duplicate:
          !!receiver.phoneNumber && phoneMap.get(receiver.phoneNumber)! > 1
      }))
    );
  }, [list.map((r) => r.phoneNumber).join(",")]);

  return (
    <ModalWindowWrapper>
      <h3>받는 사람</h3>
      <GraySub>* 최대 10명까지 추가 할 수 있어요.</GraySub>
      <GraySub>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</GraySub>
      <AddButton onClick={add}>추가하기</AddButton>
      <ReceiverList>
        {list?.map((receiver: Receiver, index: number) => {
          return (
            <ReceiverInputBox
              key={receiver.id}
              id={receiver.id}
              no={index}
              receiverData={receiver}
              onChange={(id, field, value) => {
                setList((prev) =>
                  prev.map((receiver) =>
                    receiver.id === id
                      ? { ...receiver, [field]: value }
                      : receiver
                  )
                );
              }}
              onRemove={(id) => {
                setList((prev) => prev.filter((r) => id !== r.id));
              }}
            />
          );
        })}
      </ReceiverList>
      <ButtonHorizontalLayout>
        <CancelButton onClick={closeModal}>취소</CancelButton>
        <CommitButton onClick={commit}>{list.length}명 완료</CommitButton>
      </ButtonHorizontalLayout>
    </ModalWindowWrapper>
  );
}

const ReceiverList = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const GraySub = styled.p`
  font-size: 14px;
  margin: 2px;
  color: ${theme.colors.gray.gray700};
`;

const CancelButton = styled.button`
  padding: 10px;
  flex: 1;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.gray.gray300};
`;

const CommitButton = styled.button`
  flex: 2;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.yellow.yellow500};
`;

const ButtonHorizontalLayout = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalWindowWrapper = styled.div`
  width: 50%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const AddButton = styled.button`
  margin: 10px;
  height: 35px;
  width: 70px;
  border: none;
  border-radius: 10px;
`;

export default ReceiverModalWindow;
