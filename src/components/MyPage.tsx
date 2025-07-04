import { useUserInfo } from "@/context/UserInfoProvider";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <div>My Page</div>;
};

export default MyPage;
