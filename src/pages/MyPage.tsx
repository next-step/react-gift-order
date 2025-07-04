/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogoutButton from "../components/common/BaseButton";

const MyPage = () => {
  const { isLoggedIn, userEmail, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Wrapper>
      <MyPageTitle>마이페이지</MyPageTitle>
      <MyPageBody>{userEmail?.split("@")[0]}님 안녕하세요!</MyPageBody>
      <MyPageBody>이메일주소는 {userEmail}입니다.</MyPageBody>
      <LogoutButton
        color="yellow"
        label="로그아웃"
        size="large"
        onClick={handleLogout}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.colors.default};
  align-items: center;
`;

const MyPageTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray1000};
  font-weight: bold;
`;

const MyPageBody = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.gray1000};
`;

export default MyPage;
