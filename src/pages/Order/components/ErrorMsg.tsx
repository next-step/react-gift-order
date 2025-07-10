import styled from "@emotion/styled";
import type React from "react";

interface ErrorMsgProps {
  children: React.ReactNode;
}
const ErrorMsg = ({ children }: ErrorMsgProps) => {
  return <Style>{children}</Style>;
};

export default ErrorMsg;

const Style = styled.p`
  width: 100%;
  text-align: left;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.stateColor.critical};
  padding: ${({ theme }) => theme.spacing.spacing2};
`;
