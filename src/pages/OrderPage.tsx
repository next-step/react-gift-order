import TheHeader from "@/components/layout/TheHeader";
import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { ROUTE_PATH } from "@/routes/paths";
import { gifts } from "@/data/gift";
import styled from "@emotion/styled";
import CardSection from "@/components/order/CardSection";
import SendSection from "@/components/order/SendSection";
import ReceiverSection from "@/components/order/ReceiverSection";
import GiftInformationSection from "@/components/order/GiftInformationSection";
import type { Gift } from "@/types/gift";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionUserInfo = sessionStorage.getItem("kakaotech/userInfo");
    if (!sessionUserInfo) {
      navigate(`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`, {
        replace: true,
      });
    }
  }, [location.pathname, navigate]);

  const { id } = useParams<{ id: string }>();
  const gift = gifts.find(gift => gift.id.toString() === id) as Gift;

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      [
        "주문이 완료되었습니다.",
        `상품명: ${gift.name}`,
        "구매 수량: aaa",
        "보낸 사람: aaa",
        "메시지: aaa.",
      ].join("\n"),
    );
  };

  return (
    <>
      <TheHeader />
      <Main>
        <form onSubmit={handleOrder}>
          <CardSection />
          <SendSection />
          <ReceiverSection />
          <GiftInformationSection selectedGift={gift} />
          <Button>{gift.price.sellingPrice}원 주문하기</Button>
        </form>
      </Main>
    </>
  );
};

export default OrderPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.gray200};
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding-bottom: 3.125rem;
`;

const Button = styled.button`
  z-index: 100;
  width: 100%;
  max-width: 720px;
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.spacing0} auto;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;
