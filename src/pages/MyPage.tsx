import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Spacing from "@/components/Spacing";

export default function MyPage() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLogIn = sessionStorage.getItem("userInfo");
    if (!isLogIn) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(isLogIn);
    const id = user.email.split("@")[0];
    setUserId(id);
    setEmail(user.email);
  }, []);

  const LogOut = () => {
    sessionStorage.removeItem('userInfo');
    navigate("/login");
  }

  return (
    <>
      <Wrapper>
        <MainBox>
          <Spacing height="12px" />
          <TopText>마이 페이지</TopText>
          <Spacing height="8px" />
          <BottomText>{userId}님 안녕하세요!</BottomText>
          <BottomText>이메일 주소는 {email}입니다.</BottomText>
          <Spacing height="24px" />
          <LogoutBtn onClick={LogOut}>로그아웃</LogoutBtn>
          <Spacing height="40px" />
        </MainBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding-top: 2.75rem;
`;

const MainBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const TopText = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const BottomText = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const LogoutBtn = styled.button`
  height: 2.75rem;
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms, opacity 200ms;
  padding: 0px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[500]};
  }
`