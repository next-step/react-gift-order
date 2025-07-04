import { useUserInfo } from "@/context/UserInfoProvider";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (!email || !password) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <div>마이 페이지</div>
    </div>
  );
};

export default MyPage;
