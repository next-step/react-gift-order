import TheHeader from "@/components/layout/TheHeader";
import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useUserInfo } from "@/contexts/UserInfoContext";
import { ROUTE_PATH } from "@/routes/paths";
import styled from "@emotion/styled";
import CardSection from "@/components/order/CardSection";
import SendSection from "@/components/order/SendSection";
import ReceiverSection from "@/components/order/ReceiverSection";

const OrderPage = () => {
  const user = useUserInfo();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate(`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`, {
        replace: true,
      });
    }
  }, [user, location.pathname, navigate]);

  const { id } = useParams<{ id: string }>();

  return (
    <>
      <TheHeader />
      <Main>
        <CardSection />
        <SendSection />
        <ReceiverSection />
        <h1>주문 페이지</h1>
        <p>선택한 선물의 ID: {id}</p>
        <p>로그인한 사용자: {user?.email || "게스트"}</p>
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
