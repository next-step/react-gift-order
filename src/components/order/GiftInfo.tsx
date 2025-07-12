import Spacing from "@/components/Spacing";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { ranking } from "@/data/ranking";

export default function GiftInfo() {
  const { itemId } = useParams();
  const card = ranking.find((card) => card.id === Number(itemId));
  if (!card) return null;

  return (
    <InfoBox>
      <Spacing height="12px" />
      <Info>상품 정보</Info>
      <Spacing height="12px" />
      <InfoCard>
        <InfoImg src={card.imageURL} alt={card.name} />
        <div>
          <InfoName>{card.name}</InfoName>
          <InfoBrand>{card.brandInfo.name}</InfoBrand>
          <Spacing height="4px" />
          <InfoPriceBox>
            <InfoPrice>상품가 </InfoPrice>
            {card.price.basicPrice.toLocaleString()}원
          </InfoPriceBox>
        </div>
      </InfoCard>
      <Spacing height="74px" />
    </InfoBox>
  );
}


const InfoBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Info = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const InfoCard = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  gap: 12px;
`;

const InfoImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 1 / 1;
`;

const InfoName = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const InfoBrand = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0px;
  text-align: left;
`;

const InfoPriceBox = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const InfoPrice = styled.span`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[700]};
`;
