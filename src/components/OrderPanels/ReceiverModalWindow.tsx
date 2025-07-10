import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";
import type { StateHook } from "@src/hooks/stateHookType";
import ReceiverInputBox from "./ReceiverInputBox";
import type { FormType, Receiver } from "@src/pages/OrderPage";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext
} from "react-hook-form";

type ReceiverModalWindowProps = {
  openHooks: StateHook<boolean>;
};

type ReceiverModalForm = {
  receivers: Receiver[];
};

function ReceiverModalWindow({ openHooks: open }: ReceiverModalWindowProps) {
  const { getValues: getRootValues, setValue: setRootValue } =
    useFormContext<FormType>();

  const methods = useForm<ReceiverModalForm>({
    defaultValues: {
      receivers: getRootValues("receivers").map((r) => ({ ...r }))
    }
  });

  const { control, getValues, trigger } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "receivers"
  });

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

  const cancel = () => {
    open.setValue(false);
  };

  const commit = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    const newReceivers = getValues("receivers");
    setRootValue("receivers", newReceivers);
    open.setValue(false);
  };

  return (
    <FormProvider {...methods}>
      <ModalWindowWrapper>
        <h3>받는 사람</h3>
        <GraySub>* 최대 10명까지 추가 할 수 있어요.</GraySub>
        <GraySub>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</GraySub>
        <AddButton
          type="button"
          onClick={add}
          disabled={fields.length >= ADD_LIMIT}
        >
          추가하기
        </AddButton>
        <ReceiverList>
          {fields.map((receiver: Receiver, index: number) => (
            <ReceiverInputBox
              key={receiver.id}
              id={receiver.id}
              no={index}
              onRemove={() => remove(index)}
            />
          ))}
        </ReceiverList>
        <ButtonHorizontalLayout>
          <CancelButton type="button" onClick={cancel}>
            취소
          </CancelButton>
          <CommitButton type="button" onClick={commit}>
            {fields.length}명 완료
          </CommitButton>
        </ButtonHorizontalLayout>
      </ModalWindowWrapper>
    </FormProvider>
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

const AddButton = styled.button<{ props: { disabled: boolean } }>`
  margin: 10px;
  height: 35px;
  width: 70px;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default ReceiverModalWindow;
