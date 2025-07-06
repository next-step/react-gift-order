import TheHeader from "@/components/layout/TheHeader";
import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useUserInfo } from "@/contexts/UserInfoContext";
import { ROUTE_PATH } from "@/routes/paths";

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
      <div>주문 페이지 {id}</div>
    </>
  );
};

export default OrderPage;
