import { css } from "@emotion/react";

export const headerWrapper = () => css`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #ffffff;
`;

export const titleStyle = () => css`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const backButtonStyle = css`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
`;
