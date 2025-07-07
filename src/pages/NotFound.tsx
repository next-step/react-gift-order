import styled from "@emotion/styled";
import { Layout } from "@/Components/layout/Layout";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Desc = styled.p`
  color: #888;
  margin-bottom: 32px;
`;

const HomeButton = styled.button`
  background: #f7e244;
  color: #222;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffe14a;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <Title>404 Not Found</Title>
        <Desc>존재하지 않는 페이지입니다.</Desc>
        <HomeButton onClick={() => navigate("/")}>홈으로 이동</HomeButton>
      </Wrapper>
    </Layout>
  );
};

export default NotFound; 