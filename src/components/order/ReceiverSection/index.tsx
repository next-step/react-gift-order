import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";
import {
  sectionTitleStyle,
  formGroupStyle,
  labelStyle,
  inputStyle,
} from "./styles";

function ReceiverSection() {
  return (
    <div css={whiteSectionStyle(theme)}>
      <h3 css={sectionTitleStyle}>받는 사람</h3>

      <div css={formGroupStyle}>
        <label css={labelStyle}>이름</label>
        <input type="text" placeholder="이름을 입력하세요." css={inputStyle} />
      </div>

      <div css={formGroupStyle}>
        <label css={labelStyle}>전화번호</label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요."
          css={inputStyle}
        />
      </div>

      <div css={formGroupStyle}>
        <label css={labelStyle}>수량</label>
        <input type="number" min="1" value={1} css={inputStyle} />
      </div>
    </div>
  );
}

export default ReceiverSection;
