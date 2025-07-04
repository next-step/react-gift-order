import styled from "@emotion/styled";
import CardSelector from "@src/components/OrderPanels/CardSelector";
import ProductCard from "@src/components/OrderPanels/ProductCard";
import AdvancedInput from "@src/components/shared/AdvancedInput";
import InputGroup from "@src/components/shared/InputGroup";
import UserContext from "@src/contexts/UserContext";
import useOrderErrorHandler from "@src/hooks/useOrderErrorHandler";
import useOrderState from "@src/hooks/useOrderState";
import { productMockData } from "@src/mock/productMockData";
import { PATH } from "@src/router/Router";
import theme from "@src/styles/kakaoTheme";
import { createNewMessageEvaluator } from "../utils/evaluator/implementation/messageEvaluator";
import { createNewNameEvaluator } from "@src/utils/evaluator/implementation/nameEvaluator";
import { createNewPNEvaluator } from "@src/utils/evaluator/implementation/phoneNumberEvaluator";
import { createNewQuantityEvaluator } from "@src/utils/evaluator/implementation/quantityEvaluator";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const params = useParams();
  const userContext = useContext(UserContext);

  const redirectLogin = (path: string, id: string | undefined) => {
    navigate(PATH.LOGIN + `?redirect=${encodeURIComponent(path)}/${id}`);
  };

  const messageEvaluator = createNewMessageEvaluator();
  const nameEvaluator = createNewNameEvaluator();
  const phoneNumberEvaluator = createNewPNEvaluator();
  const quantityEvaluator = createNewQuantityEvaluator();

  const orderState = useOrderState();
  const orderErrorHandler = useOrderErrorHandler();

  const orderHandler = () => {
    const messageValid = messageEvaluator.evaluate(orderState.message.value);
    const messageReason = messageEvaluator.reason();
    const senderValid = nameEvaluator.evaluate(orderState.sender.value);
    const senderReason = nameEvaluator.reason();
    const receiverValid = nameEvaluator.evaluate(orderState.receiver.value);
    const receiverReason = nameEvaluator.reason();
    const phoneNumberValid = phoneNumberEvaluator.evaluate(
      orderState.phoneNumber.value
    );
    const phoneNumberReason = phoneNumberEvaluator.reason();
    const quantityValid = quantityEvaluator.evaluate(orderState.quantity.value);
    const quantityReason = quantityEvaluator.reason();

    orderErrorHandler.messageValid.setValue(messageValid);
    orderErrorHandler.senderValid.setValue(senderValid);
    orderErrorHandler.receiverValid.setValue(receiverValid);
    orderErrorHandler.phoneNumberValid.setValue(phoneNumberValid);
    orderErrorHandler.quantityValid.setValue(quantityValid);

    if (senderValid && receiverValid && phoneNumberValid && quantityValid) {
      alert(
        `주문이 완료되었습니다.\n상품명: ${productMockData.name}\n수량: ${orderState.quantity.value}\n발신자 이름: ${orderState.sender.value}\n받는 사람 이름: ${orderState.receiver.value}\n메세지: ${orderState.message.value}`
      );
      navigate(PATH.MAIN);
    } else {
      orderErrorHandler.messageReason.setValue(messageReason);
      orderErrorHandler.senderReason.setValue(senderReason);
      orderErrorHandler.receiverReason.setValue(receiverReason);
      orderErrorHandler.phoneNumberReason.setValue(phoneNumberReason);
      orderErrorHandler.quantityReason.setValue(quantityReason);
    }
  };

  useEffect(() => {
    if (!userContext?.valid.value) {
      redirectLogin(PATH.ORDER, params.id);
    }
  }, [userContext?.valid.value]);

  return (
    <OrderPageWrapper>
      <CardSelector
        evaluator={messageEvaluator}
        validHookSet={orderErrorHandler.messageValid}
        reasonHookSet={orderErrorHandler.messageReason}
        valueHookSet={orderState.message}
      />
      <InputGroup title="보내는 사람">
        <AdvancedInput
          placeholder="이름을 입력하세요."
          type="text"
          evaluator={nameEvaluator}
          validHookSet={orderErrorHandler.senderValid}
          reasonHookSet={orderErrorHandler.senderReason}
          valueHookSet={orderState.sender}
        />
        <Sub>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Sub>
      </InputGroup>
      <InputGroup title="받는 사람">
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
      </InputGroup>
      <InputGroup title="상품 정보">
        <ProductCard />
      </InputGroup>
      <FooterButton onClick={orderHandler}>
        {productMockData.price.sellingPrice *
          parseInt(orderState.quantity.value)}
        원 주문하기
      </FooterButton>
    </OrderPageWrapper>
  );
}

const FooterButton = styled.button`
  height: 100px;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  position: sticky;
  border: none;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.yellow.yellow600};
`;

const Caption = styled.p`
  width: 75px;
`;

const InputCaptionPairWrapper = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Sub = styled.p`
  font-size: 12px;
`;

const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default OrderPage;
