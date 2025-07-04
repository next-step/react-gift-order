import styled from "@emotion/styled";
import type { ReactNode } from "react";

const ErrorMessageContainer = styled.div(({ theme }) => ({
  color: theme.color.red[700],
  fontSize: theme.typography.label1Regular.fontSize,
  fontWeight: theme.typography.label1Regular.fontWeight,
  lineHeight: theme.typography.label1Regular.lineHeight,
  marginTop: theme.spacing1,
  minHeight: `calc(${theme.typography.label1Regular.lineHeight} + ${theme.spacing1})`,
}));

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
};
