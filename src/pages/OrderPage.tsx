import styled from "@emotion/styled";
import CardSelector from "@src/components/OrderPanels/CardSelector";
import ProductCard from "@src/components/OrderPanels/ProductCard";
import AdvancedInput from "@src/components/shared/AdvancedInput";
import InputGroup from "@src/components/shared/InputGroup";
import UserContext from "@src/contexts/UserContext";
import { productMockData } from "@src/mock/productMockData";
import { PATH } from "@src/router/Router";
import theme from "@src/styles/kakaoTheme";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BatchReceiverInput from "@src/components/OrderPanels/BatchReceiverInput";
import { useForm, Controller, FormProvider } from "react-hook-form";

function OrderPage() {
  const navigate = useNavigate();
  const params = useParams();
  const userContext = useContext(UserContext);

  const redirectLogin = (path: string, id: string | undefined) => {
    navigate(PATH.LOGIN + `?redirect=${encodeURIComponent(path)}/${id}`);
  };

  const methods = useForm({
    defaultValues: {
      message: "",
      sender: "",
      receiver: "",
      phoneNumber: "",
      quantity: "1"
    }
  });

  type dataType = {
    message: string;
    sender: string;
    receiver: string;
    phoneNumber: string;
    quantity: string;
  };

  const orderHandler = (data: dataType) => {
    alert(
      `주문이 완료되었습니다.\n상품명: ${productMockData.name}\n수량: ${data.quantity}\n발신자 이름: ${data.sender}\n받는 사람 이름: ${data.receiver}\n메세지: ${data.message}`
    );
    navigate(PATH.MAIN);
  };

  useEffect(() => {
    if (!userContext?.valid.value) {
      redirectLogin(PATH.ORDER, params.id);
    }
  }, [userContext?.valid.value]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(orderHandler)}>
        <OrderPageWrapper>
          <CardSelector name="message" />
          <InputGroup title="보내는 사람">
            <Controller
              name="sender"
              control={methods.control}
              rules={{ required: "이름을 입력해주세요." }}
              render={({ field, fieldState }) => (
                <AdvancedInput
                  placeholder="이름을 입력하세요."
                  type="text"
                  {...field}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Sub>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Sub>
          </InputGroup>
          <BatchReceiverInput />
          <InputGroup title="상품 정보">
            <ProductCard />
          </InputGroup>
          <FooterButton type="submit">
            {productMockData.price.sellingPrice *
              parseInt(methods.getValues("quantity") || "1")}
            원 주문하기
          </FooterButton>
        </OrderPageWrapper>
      </form>
    </FormProvider>
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
