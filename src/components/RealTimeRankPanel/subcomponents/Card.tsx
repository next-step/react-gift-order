import styled from "@emotion/styled";
import type { Product } from "@src/mock/productMockData";
import { PATH } from "@src/router/Router";
import theme from "@src/styles/kakaoTheme";
import { useNavigate } from "react-router-dom";

type CardProps = {
  no: number;
  prod: Product;
};

function Card({ no, prod }: CardProps) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${PATH.ORDER}/${prod.id}`);
  };

  return (
    <CardWrapper onClick={clickHandler}>
      <CardNumber top3={no <= 3}>{no}</CardNumber>
      <CardImage src={prod.imageURL} alt="image" />
      <GrayP>{prod.brandInfo.name}</GrayP>
      <ZeroMarginP>{prod.name}</ZeroMarginP>
      <ZeroMarginP>
        <BoldSpan>{prod.price.sellingPrice}</BoldSpan> 원
      </ZeroMarginP>
    </CardWrapper>
  );
}

const ZeroMarginP = styled.p`
  margin: 0;
`;

const GrayP = styled.p`
  color: ${theme.colors.gray.gray600};
  margin: 0;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const CardWrapper = styled.button`
  position: relative;
  flex: 1 30%;
  border: none;
  padding: 0;
  background-color: transparent;
`;

const CardNumber = styled.div<{ top3: boolean }>`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ top3 }) =>
    top3 ? theme.colors.red.red600 : theme.colors.gray.gray600};
  color: white;
  font-weight: bold;
  border-radius: 15%;
  font-size: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 2.5%;
`;

export default Card;
