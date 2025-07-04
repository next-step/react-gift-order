import { deepFreeze } from "@/utils/deepFreeze";

const PRODUCT_INFO_CONSTANTS = deepFreeze({
  ORDER_BUTTON: "주문하기",
} as const);

export default PRODUCT_INFO_CONSTANTS;
