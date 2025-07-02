import styled from "@emotion/styled";
import UserContext from "@src/contexts/UserContext";
import { PATH } from "@src/router/Router";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const params = useParams();
  const userContext = useContext(UserContext);

  const RequireLogin = (path: string, id: string | undefined) => {
    navigate(PATH.LOGIN + `?redirect=${encodeURIComponent(path)}/${id}`);
  };
  console.log("at order");
  useEffect(() => {
    if (!userContext?.valid.value) {
      RequireLogin(PATH.ORDER, params.id);
    }
  }, [userContext?.valid.value]);

  return (
    <OrderPageWrapper>
      <p>주문 페이지</p>
    </OrderPageWrapper>
  );
}

const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default OrderPage;
