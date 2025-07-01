import styled from "@emotion/styled";
import type { ReactNode } from "react";

const LoginWrapper = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: `${theme.color.gray[0]}`,
  height: "calc(100dvh - 44px)",
  justifyContent: "center",
}));

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  return <LoginWrapper>{children}</LoginWrapper>;
};
