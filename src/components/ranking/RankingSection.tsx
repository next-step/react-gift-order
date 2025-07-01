/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { rankingList } from "@/mock/rankingList";
import { RankingCard } from "@/components/ranking/RankingCard";
import type { ThemeType } from "@/styles/theme/theme";

type GroupKey = "ALL" | "FEMALE" | "MALE" | "TEEN";
type ActionKey = "WANT" | "GIVE" | "WISH";

const GROUP_PARAM = "group";
const ACTION_PARAM = "action";

const groupOptions = [
  { key: "ALL", label: "전체", icon: "ALL" },
  { key: "FEMALE", label: "여성이", icon: "👩🏻" },
  { key: "MALE", label: "남성이", icon: "👨🏻" },
  { key: "TEEN", label: "청소년이", icon: "👦🏻" },
] as const;

const actionOptions = [
  { key: "WANT", label: "받고 싶어한" },
  { key: "GIVE", label: "많이 선물한" },
  { key: "WISH", label: "위시로 받은" },
] as const;

const isValidGroupKey = (value: string | null): value is GroupKey =>
  groupOptions.some((opt) => opt.key === value);

const isValidActionKey = (value: string | null): value is ActionKey =>
  actionOptions.some((opt) => opt.key === value);

export const RankingSection = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const rawGroup = searchParams.get(GROUP_PARAM);
  const rawAction = searchParams.get(ACTION_PARAM);

  const selectedGroup: GroupKey = isValidGroupKey(rawGroup) ? rawGroup : "ALL";
  const selectedAction: ActionKey = isValidActionKey(rawAction) ? rawAction : "WANT";

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  return (
    <section css={section(theme)}>
      <h3 css={title(theme)}>실시간 급상승 선물랭킹</h3>

      <div css={filterContainer(theme)}>
        <div css={groupFilterContainer(theme)}>
          {groupOptions.map(({ key, label, icon }) => {
            const isSelected = selectedGroup === key;
            return (
              <button
                key={key}
                css={groupButton}
                onClick={() => updateParam(GROUP_PARAM, key)}
              >
                <div css={groupIcon(theme, isSelected)}>{icon}</div>
                <p css={groupText(theme, isSelected)}>{label}</p>
              </button>
            );
          })}
        </div>

        <div css={actionFilter(theme)}>
          {actionOptions.map(({ key, label }) => {
            const isSelected = selectedAction === key;
            return (
              <button
                key={key}
                css={actionButton(theme, isSelected)}
                onClick={() => updateParam(ACTION_PARAM, key)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div css={grid(theme)}>
        {(isExpanded ? rankingList : rankingList.slice(0, 6)).map((item, idx) => (
          <RankingCard
            key={item.id}
            rank={idx + 1}
            imageURL={item.imageURL}
            brandName={item.brandInfo.name}
            productName={item.name}
            price={item.price.sellingPrice}
          />
        ))}
      </div>

      <button css={moreButton(theme)} onClick={() => setIsExpanded((prev) => !prev)}>
        <p>{isExpanded ? "접기" : "더보기"}</p>
      </button>
    </section>
  );
};

const section = (theme: ThemeType) => css`
  padding: ${theme.spacing.spacing4};
  background-color: white;
`;

const title = (theme: ThemeType) => css`
  ${theme.typography.title1Bold}
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing4};
`;

const filterContainer = (theme: ThemeType) => css`
  margin-bottom: ${theme.spacing.spacing4};
`;

const groupFilterContainer = (theme: ThemeType) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.spacing3};
`;

const groupButton = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

const groupIcon = (theme: ThemeType, isSelected: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: ${theme.spacing.spacing1};
  border-radius: 17px;
  ${theme.typography.label1Bold};
  background-color: ${isSelected ? theme.colors.blue700 : theme.colors.blue100};
  color: ${isSelected ? theme.colors.blue200 : theme.colors.blue400};
`;

const groupText = (theme: ThemeType, isSelected: boolean) => css`
  ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular};
  color: ${isSelected ? theme.colors.blue700 : theme.colors.gray700};
`;

const actionFilter = (theme: ThemeType) => css`
  display: flex;
  justify-content: space-around;
  padding: ${theme.spacing.spacing4};
  background-color: ${theme.colors.blue100};
  border-radius: 10px;
`;

const actionButton = (theme: ThemeType, isSelected: boolean) => css`
  cursor: pointer;
  color: ${isSelected ? theme.colors.blue700 : theme.colors.gray700};
  ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular};
`;

const grid = (theme: ThemeType) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.spacing2};
  margin-bottom: ${theme.spacing.spacing4};
`;

const moreButton = (theme: ThemeType) => css`
  width: 100%;
  padding: ${theme.spacing.spacing3};
  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  ${theme.typography.body1Regular};
  color: ${theme.colors.textDefault};
`;