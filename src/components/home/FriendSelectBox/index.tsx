import { useTheme } from "@emotion/react";
import { FiPlus } from "react-icons/fi";
import { boxStyle, plusIconStyle, textStyle } from "./styles";

export default function FriendSelectBox() {
  const theme = useTheme();
  return (
    <div css={boxStyle(theme)}>
      <div css={plusIconStyle(theme)}>
        <FiPlus />
      </div>
      <span css={textStyle(theme)}>선물할 친구를 선택해 주세요.</span>
    </div>
  );
}
