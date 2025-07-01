import { css } from "@emotion/react";
import { Theme } from "@emotion/react";
import { IoAppsOutline, IoWomanOutline, IoManOutline } from "react-icons/io5";
import { useTheme } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const GiftRankingHeader = () => {
  const [target, setTarget] = useState("ALL");
  const [rankType, setRank] = useState("MANY_WISH");

  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  ("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initTarget = searchParams.get("target") || "ALL";
    const initRank = searchParams.get("rankType") || "MANY_WISH";
    setTarget(initTarget);
    setRank(initRank);
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

  return (
    <>
      <div css={textStyle(theme)}>실시간 급상승 선물랭킹</div>
      <div css={containerStyle}>
        <IoWomanOutline
          onClick={() => handleTargetClick("WOMAN")}
          css={[iconStyle, target == "WOMAN" && selectedTargetStyle(theme)]}
        />
        <IoManOutline
          onClick={() => handleTargetClick("MAN")}
          css={[iconStyle, target == "MAN" && selectedTargetStyle(theme)]}
        />
        <IoAppsOutline
          onClick={() => handleTargetClick("ALL")}
          css={[
            iconStyle(theme),
            target == "ALL" && selectedTargetStyle(theme),
          ]}
        />
      </div>
      <div css={tabContainerStyle(theme)}>
        <div
          onClick={() => handleRankClick("MANY-WANT")}
          css={[
            tabItemStyle(theme),
            rankType == "MANY-WANT" && selectedRankStyle(theme),
          ]}>
          받고 싶어한
        </div>
        <div
          onClick={() => handleRankClick("MANY-GIVE")}
          css={[
            tabItemStyle(theme),
            rankType == "MANY-GIVE" && selectedRankStyle(theme),
          ]}>
          많이 선물한
        </div>
        <div
          onClick={() => handleRankClick("MANY-WISH")}
          css={[
            tabItemStyle(theme),
            rankType == "MANY-WISH" && selectedRankStyle(theme),
          ]}>
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
  border-radius: 20%;
  width: 36px;
  height: 36px;
`;

const tabContainerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  border: 1px solid ${theme.colors.semantic.border.default};
  background-color: ${theme.colors.blue.blue100};
`;

const tabItemStyle = (theme: Theme) => css`
  flex: 1;
  padding: 12px 16px;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const selectedTargetStyle = (theme: Theme) => css`
  color: ${theme.colors.blue.blue500};
`;

const selectedRankStyle = (theme: Theme) => css`
  color: ${theme.colors.blue.blue500};
  font-weight: 600;
`;
