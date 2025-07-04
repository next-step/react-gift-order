import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";
import { sectionTitleStyle, inputStyle, infoTextStyle } from "./styles";

function SenderSection() {
  return (
    <div css={whiteSectionStyle(theme)}>
      <h3 css={sectionTitleStyle}>보내는 사람</h3>
      <input type="text" placeholder="이름을 입력하세요." css={inputStyle} />
      <p css={infoTextStyle}>
        * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
      </p>
    </div>
  );
}

export default SenderSection;
