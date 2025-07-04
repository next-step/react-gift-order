import { whiteSectionStyle } from "@/styles/CommonStyles";
import theme from "@/styles/theme";
import {
  sectionTitleStyle,
  formGroupStyle,
  labelStyle,
  inputStyle,
} from "./styles";
import { useInput } from "@/hooks/UseInput";
import { useOrder } from "@/contexts/OrderContext";

function ReceiverSection({
  nameInput,
  phoneInput,
  quantityInput,
}: {
  nameInput: ReturnType<typeof useInput>;
  phoneInput: ReturnType<typeof useInput>;
  quantityInput: ReturnType<typeof useInput>;
}) {
  const { setQuantity, setTotalPrice, productPrice } = useOrder();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    quantityInput.onChange(value);
    const num = Number(value);
    if (!isNaN(num) && num >= 1) {
      setQuantity(num);
      setTotalPrice(productPrice * num);
    }
  };

  return (
    <div css={whiteSectionStyle(theme)}>
      <h3 css={sectionTitleStyle}>받는 사람</h3>

      <div css={formGroupStyle}>
        <label css={labelStyle}>이름</label>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          css={inputStyle}
          value={nameInput.value}
          onChange={(e) => nameInput.onChange(e.target.value)}
          onBlur={nameInput.onBlur}
        />
        {nameInput.error && (
          <p style={{ color: "red", fontSize: "12px" }}>{nameInput.error}</p>
        )}
      </div>

      <div css={formGroupStyle}>
        <label css={labelStyle}>전화번호</label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요."
          css={inputStyle}
          value={phoneInput.value}
          onChange={(e) => phoneInput.onChange(e.target.value)}
          onBlur={phoneInput.onBlur}
        />
        {phoneInput.error && (
          <p style={{ color: "red", fontSize: "12px" }}>{phoneInput.error}</p>
        )}
      </div>

      <div css={formGroupStyle}>
        <label css={labelStyle}>수량</label>
        <input
          type="number"
          min="0"
          css={inputStyle}
          value={quantityInput.value}
          onChange={handleQuantityChange}
          onBlur={quantityInput.onBlur}
        />
        {quantityInput.error && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {quantityInput.error}
          </p>
        )}
      </div>
    </div>
  );
}

export default ReceiverSection;
