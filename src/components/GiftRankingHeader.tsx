import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const GiftRankingHeader = () => {
  const [target, setTarget] = useState("ALL");
  const [rankType, setRank] = useState("MANY_WISH");

  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initTarget = searchParams.get("target") || "ALL";
    const initRank = searchParams.get("rankType") || "MANY_WISH";
    setTarget(initTarget);
    setRank(initRank);
    const params = new URLSearchParams(location.search);
    params.set("target", initTarget);
    params.set("rankType", initRank);
    navigate(`${location.pathname}?${params.toString()}`);
  }, []);

  const handleTargetClick = (newTarget: string) => {
    setTarget(newTarget);
    const params = new URLSearchParams(location.search);
    params.set("target", newTarget);
    params.set("rankType", rankType);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleRankClick = (newRank: string) => {
    setRank(newRank);
    const params = new URLSearchParams(location.search);
    params.set("target", target);
    params.set("rankType", newRank);
    navigate(`${location.pathname}?${params.toString()}`);
  };
  //👩🏻
  //
  return (
    <>
      <div css={textStyle(theme)}>실시간 급상승 선물랭킹</div>
      <div css={containerStyle}>
        <div css={filterContainerStyle()}>
          <div
            onClick={() => handleTargetClick("ALL")}
            css={[
              iconStyle(theme),
              target == "ALL" && selectedTargetStyle(theme),
            ]}
          >
            ALL
          </div>
          <p css={target === "ALL" ? selectedTargetStyle(theme) : undefined}>
            전체
          </p>
        </div>

        <div css={filterContainerStyle()}>
          <div
            onClick={() => handleTargetClick("WOMAN")}
            css={[
              iconStyle(theme),
              target == "WOMAN" && selectedTargetStyle(theme),
            ]}
          >
            👩🏻
          </div>
          <p css={target === "WOMAN" ? selectedTargetStyle(theme) : undefined}>
            여성이
          </p>
        </div>

        <div css={filterContainerStyle()}>
          <div
            onClick={() => handleTargetClick("MAN")}
            css={[
              iconStyle(theme),
              target == "MAN" && selectedTargetStyle(theme),
            ]}
          >
            👨🏻
          </div>
          <p css={target == "MAN" && selectedTargetStyle(theme)}>남성이</p>
        </div>
      </div>
      <div css={tabContainerStyle(theme)}>
        <div
          onClick={() => handleRankClick("MANY-WANT")}
          css={[
            tabItemStyle(),
            rankType == "MANY-WANT" && selectedRankStyle(theme),
          ]}
        >
          받고 싶어한
        </div>
        <div
          onClick={() => handleRankClick("MANY-GIVE")}
          css={[
            tabItemStyle(),
            rankType == "MANY-GIVE" && selectedRankStyle(theme),
          ]}
        >
          많이 선물한
        </div>
        <div
          onClick={() => handleRankClick("MANY-WISH")}
          css={[
            tabItemStyle(),
            rankType == "MANY-WISH" && selectedRankStyle(theme),
          ]}
        >
          위시로 받은
        </div>
      </div>
    </>
  );
};

export default GiftRankingHeader;

const textStyle = (theme: Theme) => css`
  padding: 16px;
  font-size: 1.25rem;
  font-weight: ${theme.typography.subtitle1Bold.weight};
  line-height: ${theme.typography.subtitle1Bold.lineHeight};
  color: ${theme.colors.semantic.text.default};
  height: 30px;
  text-align: left;
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 200px;
  width: 100%;
  min-height: 80px;
  border-radius: 16px;
`;

const iconStyle = (theme: Theme) => css`
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 16px;
  background-color: ${theme.colors.blue.blue100};
`;
const tabContainerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: ${theme.spacing.spacing4};
  width: 100%;
  border: 1px solid ${theme.colors.semantic.border.default};
  background-color: ${theme.colors.blue.blue100};
`;

const tabItemStyle = () => css`
  flex: 1;
  padding: 12px 16px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const selectedTargetStyle = (theme: Theme) => css`
  color: ${theme.colors.blue.blue700};
`;

const selectedRankStyle = (theme: Theme) => css`
  color: ${theme.colors.blue.blue500};
  font-weight: ${theme.typography.body1Bold.weight};
`;

const filterContainerStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
