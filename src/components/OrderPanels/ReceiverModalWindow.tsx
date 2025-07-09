import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";
import type { StateHook } from "@src/hooks/stateHookType";
import ReceiverInputBox from "./ReceiverInputBox";
import { useEffect, useRef } from "react";
import type { FormType, Receiver } from "@src/pages/OrderPage";
import { useFieldArray, useFormContext } from "react-hook-form";

type ReceiverModalWindowProps = {
  openHooks: StateHook<boolean>;
};

function ReceiverModalWindow({ openHooks: open }: ReceiverModalWindowProps) {
  const { control, getValues, trigger } = useFormContext<FormType>();
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "receivers"
  });

  const reset = () => {
    replace(oldList.current);
    setTimeout(() => open.setValue(false), 0);
  };

  const commit = async () => {
    const isValid = await trigger("receivers");
    if (!isValid) return;
    const list = getValues("receivers");
    replace(list);
    open.setValue(false);
  };

  const ADD_LIMIT = 10;
  const add = () => {
    if (fields.length >= ADD_LIMIT) return;
    append({
      id: crypto.randomUUID(),
      name: "",
      phoneNumber: "",
      quantity: "1"
    });
  };

  const oldList = useRef<Receiver[]>([]);

  useEffect(() => {
    if (open.value) {
      oldList.current = getValues("receivers").map((r) => ({ ...r }));
    }
  }, [open.value]);

  return (
    <ModalWindowWrapper>
      <h3>받는 사람</h3>
      <GraySub>* 최대 10명까지 추가 할 수 있어요.</GraySub>
      <GraySub>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</GraySub>
      <AddButton type="button" onClick={add}>
        추가하기
      </AddButton>
      <ReceiverList>
        {fields?.map((receiver: Receiver, index: number) => {
          return (
            <ReceiverInputBox
              key={receiver.id}
              id={receiver.id}
              no={index}
              onRemove={() => remove(index)}
            />
          );
        })}
      </ReceiverList>
      <ButtonHorizontalLayout>
        <CancelButton type="reset" onClick={reset}>
          취소
        </CancelButton>
        <CommitButton type="submit" onClick={commit}>
          {fields.length}명 완료
        </CommitButton>
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
