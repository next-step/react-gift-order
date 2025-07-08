/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "@/components/common/BaseButton";
import useAuthNavigation from "@/hooks/useAuthNavigation";
import { useEffect } from "react";

const MyPage = () => {
  const { userEmail, userName, logout } = useAuth();
  const navigate = useNavigate();
  const { goToPathWithAuth } = useAuthNavigation();

  useEffect(() => {
    goToPathWithAuth("/my");
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Wrapper>
      <MyPageTitle>마이페이지</MyPageTitle>
      <MyPageBody>{userName}님 안녕하세요!</MyPageBody>
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
