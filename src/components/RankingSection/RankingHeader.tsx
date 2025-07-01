import { css } from "@emotion/react";

const headerStyle = css`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 16px;
`;

export default function RankingHeader() {
  return <div css={headerStyle}>실시간 급상승 선물랭킹</div>;
}
