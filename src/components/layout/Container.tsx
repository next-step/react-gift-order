import styled from "@emotion/styled";
import { type ReactNode } from "react";

const StyledContainer = styled.div({
  maxWidth: "720px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "rgb(247, 248, 249)",
});

export const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
