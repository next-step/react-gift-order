import styled from "@emotion/styled";
import AdvancedInput from "@src/components/shared/AdvancedInput";
import useReceiverErrorHandler from "@src/hooks/useReceiverErrorHandler";
import useReceiverState from "@src/hooks/useReceiverState";
import { createNewNameEvaluator } from "@src/utils/evaluator/implementation/nameEvaluator";
import { createNewPNEvaluator } from "@src/utils/evaluator/implementation/phoneNumberEvaluator";
import { createNewQuantityEvaluator } from "@src/utils/evaluator/implementation/quantityEvaluator";
import { useEffect } from "react";

type ReceiverInputBoxProps = {
  id: string;
  no: number;
  receiverData: {
    receiver: string;
    phoneNumber: string;
    quantity: string;
    duplicate: boolean;
  };
  onChange: (
    id: string,
    field: "name" | "phoneNumber" | "quantity",
    value: string
  ) => void;
  onRemove: (id: string) => void;
};

function ReceiverInputBox({
  id,
  no,
  receiverData,
  onChange,
  onRemove
}: ReceiverInputBoxProps) {
  const nameEvaluator = createNewNameEvaluator();
  const phoneNumberEvaluator = createNewPNEvaluator();
  const quantityEvaluator = createNewQuantityEvaluator();

  const receiverState = useReceiverState();
  const receiverErrorHandler = useReceiverErrorHandler();

  useEffect(() => {
    onChange(id, "name", receiverState.receiver.value);
  }, [receiverState.receiver.value]);

  useEffect(() => {
    onChange(id, "phoneNumber", receiverState.phoneNumber.value);
  }, [receiverState.phoneNumber.value]);

  useEffect(() => {
    onChange(id, "quantity", receiverState.quantity.value);
  }, [receiverState.quantity.value]);

  useEffect(() => {
    receiverErrorHandler.phoneNumberValid.setValue(!receiverData.duplicate);
    receiverErrorHandler.phoneNumberReason.setValue(
      receiverData.duplicate ? "중복된 전화번호가 있습니다." : null
    );
  }, [receiverData.duplicate]);

  return (
    <InputGroupWrapper>
      <TitleP>
        {`받는 사람 ${no}`}
        <RemoveButton onClick={() => onRemove(id)}>✕</RemoveButton>
      </TitleP>
      <InputCaptionPairWrapper>
        <Caption>이름</Caption>
        <AdvancedInput
          placeholder="이름을 입력하세요."
          type="text"
          evaluator={nameEvaluator}
          validHookSet={receiverErrorHandler.receiverValid}
          reasonHookSet={receiverErrorHandler.receiverReason}
          valueHookSet={receiverState.receiver}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>전화번호</Caption>
        <AdvancedInput
          placeholder="전화번호를 입력하세요."
          type="text"
          evaluator={phoneNumberEvaluator}
          validHookSet={receiverErrorHandler.phoneNumberValid}
          reasonHookSet={receiverErrorHandler.phoneNumberReason}
          valueHookSet={receiverState.phoneNumber}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>수량</Caption>
        <AdvancedInput
          placeholder=""
          type="number"
          evaluator={quantityEvaluator}
          validHookSet={receiverErrorHandler.quantityValid}
          reasonHookSet={receiverErrorHandler.quantityReason}
          valueHookSet={receiverState.quantity}
        />
      </InputCaptionPairWrapper>
    </InputGroupWrapper>
  );
}

const Caption = styled.p`
  width: 60px;
  font-size: 14px;
`;

const InputCaptionPairWrapper = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

//Change calc values as well when changing width value
const InputGroupWrapper = styled.div`
  width: calc(100% - 2 * 15px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
`;

const TitleP = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

const RemoveButton = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
`;

export default ReceiverInputBox;
