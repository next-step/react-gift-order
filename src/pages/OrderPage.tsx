import styled from "@emotion/styled";
import UserContext from "@src/contexts/UserContext";
import { cardTempleteMockData } from "@src/mock/cardTempleteMockData";
import { productMockData } from "@src/mock/productMockData";
import { PATH } from "@src/router/Router";
import theme from "@src/styles/kakaoTheme";
import { useContext, useEffect, useState } from "react";
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

function CardSelector() {
  const cardTemplete = cardTempleteMockData;
  const [selectedCard, setSelectedCard] = useState<number>(0);
  return (
    <CardSelectorWrapper>
      <CardThumbnailWrapper>
        {cardTemplete.map((c, i) => {
          return (
            <CardThumbnail
              onClick={() => setSelectedCard(i)}
              key={c.id}
              src={c.thumbUrl}
              alt="card"
              selected={selectedCard === i}
            />
          );
        })}
      </CardThumbnailWrapper>
      <CardImage src={cardTemplete[selectedCard].imageUrl} alt="card" />
      <MessegeArea placeholder="메세지를 입력해주세요." />
    </CardSelectorWrapper>
  );
}

const CardSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
`;

const CardThumbnail = styled.img<{ selected: boolean }>`
  border-radius: 10px;
  border: ${({ selected }) => (selected ? "2px solid black" : "none")};
`;

const CardImage = styled.img`
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.35);
`;

const CardThumbnailWrapper = styled.div`
  height: 75px;
  padding: 10px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

const MessegeArea = styled.textarea`
  margin: 20px;
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

function ProductCard() {
  return (
    <ProductCardWrapper>
      <Image src={productMockData.imageURL} alt="image" />
      <Description>
        <ProductName>{productMockData.name}</ProductName>
        <BrandName>{productMockData.brandInfo.name}</BrandName>
        <Price>
          상품가 <strong>{productMockData.price.sellingPrice}원</strong>
        </Price>
      </Description>
    </ProductCardWrapper>
  );
}

const ProductName = styled.p`
  margin: 0;
`;

const BrandName = styled.p`
  margin: 0;
  font-size: 12.5px;
  color: ${theme.colors.gray.gray700};
  margin-bottom: 10px;
`;

const Price = styled.p`
  margin: 0;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 5px;
`;

const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-around;
  margin-left: 10px;
`;

const ProductCardWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  margin: 4px;
  padding: 10px;
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

function InputGroup(props: { title: string; children: ReactNode }) {
  return (
    <InputGroupWrapper>
      <TitleP>{props.title}</TitleP>
      {props.children}
    </InputGroupWrapper>
  );
}

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
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  margin: 10px;
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
