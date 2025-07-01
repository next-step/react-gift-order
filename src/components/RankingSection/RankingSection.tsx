import { css } from "@emotion/react";
import RankingHeader from "@components/RankingSection/RankingHeader";
import RankingFilterTabs from "@components/RankingSection/RankingFilterTabs";
import RankingGrid from "@components/RankingSection/RankingGrid";
import RankingSubFilterTabs from "@components/RankingSection/RankingSubFilterTabs";

const sectionStyle = css`
  margin-top: 32px;
`;

export default function RankingSection() {
  return (
    <section css={sectionStyle}>
      <RankingHeader />
      <RankingFilterTabs />
      <RankingSubFilterTabs />
      <RankingGrid />
    </section>
  );
}
