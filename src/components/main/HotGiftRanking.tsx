import {
  HotGiftRankingGrid,
  HotGiftRankingTab,
  HotGiftRankingTag,
} from "@/components/main";
import styled from "@emotion/styled";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const HotGiftRankingSectionContainer = styled.section(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: `0 ${theme.spacing4}`,
  backgroundColor: `${theme.color.gray[0]}`,
}));

const HotGiftRankingSectionTitle = styled.h3(({ theme }) => ({
  fontSize: `${theme.typography.title1Bold.fontSize}`,
  fontWeight: `${theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${theme.typography.title1Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: `${theme.spacing5}`,
}));

const HotGiftRankingSectionTagContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "67px",
  marginBottom: `${theme.spacing4}`,
}));

const tags = [
  { id: "ALL", emoji: "ALL", text: "전체" },
  { id: "FEMALE", emoji: "👩", text: "여성이" },
  { id: "MALE", emoji: "👨", text: "남성이" },
  { id: "TEEN", emoji: "👦", text: "청소년이" },
];

export const HotGiftRanking = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTag = searchParams.get("targetType") || "ALL";
  const selectedTab = searchParams.get("rankType") || "MANY_WISH";

  const handleParamChange = useCallback(
    (key: "targetType" | "rankType", value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams],
  );

  return (
    <HotGiftRankingSectionContainer>
      <HotGiftRankingSectionTitle>
        실시간 급상승 선물랭킹
      </HotGiftRankingSectionTitle>
      <HotGiftRankingSectionTagContainer>
        {tags.map(tag => (
          <HotGiftRankingTag
            key={tag.id}
            isSelected={selectedTag === tag.id}
            onClick={() => handleParamChange("targetType", tag.id)}
            tagEmoji={tag.emoji}
            tagText={tag.text}
          />
        ))}
      </HotGiftRankingSectionTagContainer>
      <HotGiftRankingTab
        selectedTab={selectedTab}
        onTabChange={tabId => handleParamChange("rankType", tabId)}
      />
      <HotGiftRankingGrid />
    </HotGiftRankingSectionContainer>
  );
};
