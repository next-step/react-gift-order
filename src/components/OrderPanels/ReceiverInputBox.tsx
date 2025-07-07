import styled from "@emotion/styled";
import AdvancedInput from "@src/components/shared/AdvancedInput";
import useOrderErrorHandler from "@src/hooks/useOrderErrorHandler";
import useOrderState from "@src/hooks/useOrderState";
import { createNewNameEvaluator } from "@src/utils/evaluator/implementation/nameEvaluator";
import { createNewPNEvaluator } from "@src/utils/evaluator/implementation/phoneNumberEvaluator";
import { createNewQuantityEvaluator } from "@src/utils/evaluator/implementation/quantityEvaluator";

type ReceiverInputBoxProps = {
  no: number;
  onRemove: () => void;
};

function ReceiverInputBox({ no, onRemove }: ReceiverInputBoxProps) {
  const nameEvaluator = createNewNameEvaluator();
  const phoneNumberEvaluator = createNewPNEvaluator();
  const quantityEvaluator = createNewQuantityEvaluator();

  const orderState = useOrderState();
  const orderErrorHandler = useOrderErrorHandler();

  return (
    <InputGroupWrapper>
      <TitleP>
        {`받는 사람 ${no}`}
        <RemoveButton onClick={onRemove}>✕</RemoveButton>
      </TitleP>
      <InputCaptionPairWrapper>
        <Caption>이름</Caption>
        <AdvancedInput
          placeholder="이름을 입력하세요."
          type="text"
          evaluator={nameEvaluator}
          validHookSet={orderErrorHandler.receiverValid}
          reasonHookSet={orderErrorHandler.receiverReason}
          valueHookSet={orderState.receiver}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>전화번호</Caption>
        <AdvancedInput
          placeholder="전화번호를 입력하세요."
          type="text"
          evaluator={phoneNumberEvaluator}
          validHookSet={orderErrorHandler.phoneNumberValid}
          reasonHookSet={orderErrorHandler.phoneNumberReason}
          valueHookSet={orderState.phoneNumber}
        />
      </InputCaptionPairWrapper>
      <InputCaptionPairWrapper>
        <Caption>수량</Caption>
        <AdvancedInput
          placeholder=""
          type="number"
          evaluator={quantityEvaluator}
          validHookSet={orderErrorHandler.quantityValid}
          reasonHookSet={orderErrorHandler.quantityReason}
          valueHookSet={orderState.quantity}
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
