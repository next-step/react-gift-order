import React from "react";
import { useLoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  const { user, logout } = useLoginContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>마이페이지</h1>
      <p>안녕하세요, <b>{user?.email}</b> 님!</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage; 