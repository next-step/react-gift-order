import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FILTER_LABELS = ["전체", "여성", "남성", "청소년이"] as const;
const FILTER_OPTIONS = FILTER_LABELS;

const tabsWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing3};
  font-size: ${theme.fontSizes.label1Regular};
`;

const tabItem = (theme: Theme) => css`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.gray.gray200};
  }
`;

const tabItemStyle = (theme: Theme, isSelected: boolean) => css`
  ${tabItem(theme)};
  background-color: ${isSelected ? theme.colors.gray.gray300 : "transparent"};
`;

export default function RankingFilterTabs() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const rawParam = searchParams.get("main");
  const isValid = FILTER_OPTIONS.includes(
    rawParam as (typeof FILTER_OPTIONS)[number]
  );
  const selected = isValid ? rawParam : FILTER_OPTIONS[0];

  useEffect(() => {
    const current = searchParams.get("main");
    const isCurrentValid = FILTER_OPTIONS.includes(current as any);
    if (!isCurrentValid && current !== FILTER_OPTIONS[0]) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("main", FILTER_OPTIONS[0]);
      setSearchParams(newParams);
    }
  }, [rawParam]);

  const handleClick = (label: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("main", label);
    setSearchParams(newParams);
  };

  return (
    <div css={tabsWrapper(theme)}>
      {FILTER_OPTIONS.map((label) => (
        <div
          key={label}
          css={tabItemStyle(theme, label === selected)}
          onClick={() => handleClick(label)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
