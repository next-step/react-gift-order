import React from "react";
import { useLoginContext } from "../contexts/LoginContext";

const MyPage: React.FC = () => {
  const { user, logout } = useLoginContext();

  return (
    <div style={{ padding: 40 }}>
      <h1>마이페이지</h1>
      <p>안녕하세요, <b>{user?.email}</b> 님!</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default MyPage; 