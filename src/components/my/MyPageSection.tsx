import { Button } from "@/components/common";
import { ROUTE_PATH } from "@/constants";
import { getUserInfo, removeUserInfo } from "@/utils";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const MyPageHeader = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body1Bold.fontSize}`,
  fontWeight: `${theme.typography.body1Bold.fontWeight}`,
  lineHeight: `${theme.typography.body1Bold.lineHeight}`,
  padding: `${theme.spacing8} 0 ${theme.spacing2} 0`,
  color: `${theme.color.gray[900]}`,
}));

const MyPageGreet = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body1Regular.fontSize}`,
  fontWeight: `${theme.typography.body1Regular.fontWeight}`,
  lineHeight: `${theme.typography.body1Regular.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: `${theme.spacing4}`,
}));

export const MyPageSection = () => {
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const userName = userInfo ? userInfo.email.split("@")[0] : "";

  const handleLogout = () => {
    removeUserInfo();
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <>
      <MyPageHeader>마이 페이지</MyPageHeader>
      <MyPageGreet>{userName ? `${userName}님 안녕하세요!` : ""}</MyPageGreet>
      <MyPageGreet>
        {userInfo ? `이메일 주소는 ${userInfo.email}입니다.` : ""}
      </MyPageGreet>
      <Button
        variant="outlined"
        size="large"
        width="72.4px"
        onClick={handleLogout}
      >
        로그아웃
      </Button>
    </>
  );
};
