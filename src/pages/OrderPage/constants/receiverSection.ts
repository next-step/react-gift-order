import { deepFreeze } from "@/utils/deepFreeze";

const RECEIVER_SECTION_CONSTANTS = deepFreeze({
  TITLE: "받는 사람",
  NAME_LABEL: "이름",
  NAME_PLACEHOLDER: "이름을 입력하세요.",
  NAME_ERROR: "이름을 입력해주세요.",
  PHONE_LABEL: "전화번호",
  PHONE_PLACEHOLDER: "전화번호를 입력하세요.",
  PHONE_ERROR: "전화번호를 입력해주세요.",
  QUANTITY_LABEL: "수량",
  QUANTITY_PLACEHOLDER: "수량을 입력하세요.",
  QUANTITY_ERROR: "수량을 입력해주세요.",
} as const);

export default RECEIVER_SECTION_CONSTANTS;
