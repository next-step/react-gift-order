import { useTheme } from "@emotion/react";
import { bannerStyle } from "./styles";

export default function SupportBanner() {
  const theme = useTheme();

  return (
    <div css={bannerStyle(theme)}>
      <span>카카오테크 캠퍼스 3기 여러분</span>
      <br />
      프론트엔드 2단계 과제 화이팅! 🎉
    </div>
  );
}
