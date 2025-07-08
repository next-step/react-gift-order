import { getUserInfo } from "@/utils";
import styled from "@emotion/styled";
import { Plus } from "lucide-react";

const FriendSectionWrapper = styled.section(({ theme }) => ({
  display: "flex",
  padding: `${theme.spacing4} ${theme.spacing3}`,
  backgroundColor: theme.color.gray[200],
}));

const FriendSectionContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: `${theme.spacing3}`,
  width: "100%",
  height: "74px",
  padding: `${theme.spacing4}`,
  backgroundColor: `${theme.color.gray[0]}`,
  borderRadius: "18px",
}));

const FriendSectionIconCircle = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  backgroundColor: `${theme.color.yellow[600]}`,
  cursor: "pointer",
  borderRadius: "16px",
}));

const FriendSectionDescription = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body1Bold.fontSize}`,
  lineHeight: `${theme.typography.body1Bold.lineHeight}`,
  fontWeight: `${theme.typography.body1Bold.fontWeight}`,
  color: theme.color.gray[900],
}));

export const SelectFriendSection = () => {
  const userInfo = getUserInfo();
  const userName = userInfo ? userInfo.userName : "";

  return (
    <FriendSectionWrapper>
      <FriendSectionContainer>
        <FriendSectionIconCircle>
          <Plus />
        </FriendSectionIconCircle>
        <FriendSectionDescription>
          {userName
            ? `${userName}님! 선물할 친구를 선택해 주세요.`
            : "선물할 친구를 선택해 주세요."}
        </FriendSectionDescription>
      </FriendSectionContainer>
    </FriendSectionWrapper>
  );
};
