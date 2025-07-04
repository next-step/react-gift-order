import { css } from "@emotion/react";

export const cardListStyle = css`
  display: flex;
  overflow-x: auto;
  padding: 8px 0;
`;

export const selectedCardStyle = css`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export const messageInputStyle = css`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  resize: none;
`;

export const cardThumbnailStyle = (selected: boolean) => css`
  width: 100px;
  height: 56px;
  border-radius: 8px;
  margin-right: 8px;
  border: ${selected ? "2px solid black" : "none"};
  cursor: pointer;
`;

export const selectedCardImageStyle = css`
  width: 340px;
  border-radius: 12px;
`;
