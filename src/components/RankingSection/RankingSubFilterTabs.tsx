import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FILTER_OPTIONS = ["받고 싶어한", "많이 선물한", "위시로 받은"];

export default function RankingSubFilterTabs() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const rawParam = searchParams.get("sub");
  const isValid = FILTER_OPTIONS.includes(
    rawParam as (typeof FILTER_OPTIONS)[number]
  );
  const selected = isValid ? rawParam : FILTER_OPTIONS[0];

  useEffect(() => {
    const current = searchParams.get("sub");
    const isCurrentValid = FILTER_OPTIONS.includes(current as any);
    if (!isCurrentValid && current !== FILTER_OPTIONS[0]) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("sub", FILTER_OPTIONS[0]);
      setSearchParams(newParams);
    }
  }, [rawParam]);

  return (
    <div css={containerStyle(theme)}>
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option}
          onClick={() => {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("sub", option);
            setSearchParams(newParams);
          }}
          css={tabItemStyle(theme, selected === option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

const containerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.blue.blue100};
  border-radius: 12px;
  padding: 16px 0;
`;

const tabItemStyle = (theme: Theme, isActive: boolean) => css`
  background: none;
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${isActive ? theme.typography.body1Bold.fontWeight : 400};
  color: ${isActive ? theme.colors.blue.blue700 : theme.colors.gray.gray400};
  cursor: pointer;
`;
