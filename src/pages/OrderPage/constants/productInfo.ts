import { deepFreeze } from "@/utils/deepFreeze";

const PRODUCT_INFO_CONSTANTS = deepFreeze({
  TITLE: "상품 정보",
  PRICE_LABEL: "상품가",
  WON: "원",
  ORDER_BUTTON_LABEL: "주문하기",
} as const);

export default PRODUCT_INFO_CONSTANTS;
