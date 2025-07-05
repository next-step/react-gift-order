import { useUserInfo } from "@/context/UserInfoProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const { setUser } = useUserInfo();

  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    setUser({ email, password });
    if (!email || !password) {
      navigate("/login");
    }
  }, []);

  return <div>주문하기 페이지</div>;
};

export default Order;
