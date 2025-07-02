import styled from "@emotion/styled";
import type { ReactNode } from "react";

const MyPageWrapper = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "calc(100dvh - 44px)",
  padding: theme.spacing4,
  backgroundColor: `${theme.color.gray[0]}`,
}));

export const MyPageLayout = ({ children }: { children: ReactNode }) => {
  return <MyPageWrapper>{children}</MyPageWrapper>;
};
