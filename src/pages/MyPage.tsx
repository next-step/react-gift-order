import { useLoginContext } from "@/contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Layout } from "@/Components/layout/Layout";

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0 32px 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;

const InfoBox = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 8px;
  text-align: center;
`;

const Email = styled.div`
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 0;
  text-align: center;
`;

const LogoutButton = styled.button`
  width: 100%;
  max-width: 400px;
  background: #f7e244;
  color: #222;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 20px 0;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  &:hover {
    background: #ffe14a;
  }
`;

const MyPage = () => {
  const { user, logout } = useLoginContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout>
      <Wrapper>
        <Title>마이페이지</Title>
        <InfoBox>
          <Name>{user?.email.split("@")[0]}님 안녕하세요!</Name>
          <Email>이메일 주소는 {user?.email}입니다.</Email>
        </InfoBox>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Wrapper>
    </Layout>
  );
};

export default MyPage; 