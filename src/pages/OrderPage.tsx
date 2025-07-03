import styled from "@emotion/styled";
import CardSelector from "@src/components/OrderPanels/CardSelector";
import ProductCard from "@src/components/OrderPanels/ProductCard";
import InputGroup from "@src/components/shared/InputGroup";
import UserContext from "@src/contexts/UserContext";
import { cardTempleteMockData } from "@src/mock/cardTempleteMockData";
import { productMockData } from "@src/mock/productMockData";
import { PATH } from "@src/router/Router";
import theme from "@src/styles/kakaoTheme";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const params = useParams();
  const userContext = useContext(UserContext);

  const RequireLogin = (path: string, id: string | undefined) => {
    navigate(PATH.LOGIN + `?redirect=${encodeURIComponent(path)}/${id}`);
  };

  useEffect(() => {
    if (!userContext?.valid.value) {
      RequireLogin(PATH.ORDER, params.id);
    }
  }, [userContext?.valid.value]);

  return (
    <OrderPageWrapper>
      <CardSelector />
      <InputGroup title="보내는 사람">
        <InputField placeholder="이름을 입력하세요." />
        <Sub>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Sub>
      </InputGroup>
      <InputGroup title="받는 사람">
        <InputCaptionPairWrapper>
          <Caption>이름</Caption>
          <InputField placeholder="이름을 입력하세요." />
        </InputCaptionPairWrapper>
        <InputCaptionPairWrapper>
          <Caption>전화번호</Caption>
          <InputField placeholder="전화번호를 입력하세요." />
        </InputCaptionPairWrapper>
        <InputCaptionPairWrapper>
          <Caption>수량</Caption>
          <InputField type="number" />
        </InputCaptionPairWrapper>
      </InputGroup>
      <InputGroup title="상품 정보">
        <ProductCard />
      </InputGroup>
      <FooterButton>19000원 주문하기</FooterButton>
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

const InputField = styled.input`
  flex: 1;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  transition: border-bottom 0.25s ease;

  &:focus {
    border: 1px solid ${theme.colors.gray.gray700};
  }
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
