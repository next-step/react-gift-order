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

  return (
    <>
      <TheHeader />
      <Main>
        <CardSection />
        <SendSection />
        <ReceiverSection />
        <GiftInformationSection selectedGift={gift} />
        <p>선택한 선물의 ID: {id}</p>
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
`;
