import { useTheme } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { tabsWrapper, tabItemStyle } from "./styles";

const FILTER_LABELS = ["전체", "여성", "남성", "청소년이"] as const;
const FILTER_OPTIONS = FILTER_LABELS;

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
