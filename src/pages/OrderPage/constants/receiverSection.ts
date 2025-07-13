export const RECEIVER_SECTION_CONSTANTS = {
  TITLE: "받는 사람",
  INDEX_TITLE: (index: number) =>
    `${RECEIVER_SECTION_CONSTANTS.TITLE} ${index}`,
  ADD_BUTTON: "추가",
  NO_RECEIVERS_MESSAGE: "받는 사람이 없습니다.",
  ADD_RECEIVER_GUIDE: "받는 사람을 추가해주세요.",
  NAME_LABEL: "이름",
  NAME_PLACEHOLDER: "이름을 입력하세요.",
  NAME_ERROR: "이름을 입력해주세요.",
  PHONE_LABEL: "전화번호",
  PHONE_PLACEHOLDER: "전화번호를 입력하세요.",
  PHONE_ERROR: "전화번호를 입력해주세요.",
  QUANTITY_LABEL: "수량",
  QUANTITY_PLACEHOLDER: "수량을 입력하세요.",
  QUANTITY_ERROR: "수량을 입력해주세요.",
} as const;

export const RECEIVER_MODAL_CONSTANTS = {
  MODAL_TITLE: "받는 사람",
  INFO_TEXT_MAX_COUNT: (count: number) =>
    `* 최대 ${count}명까지 추가할 수 있어요.`,
  INFO_TEXT_DUPLICATE: "* 전화번호는 중복으로 입력할 수 없어요.",
  ADD_BUTTON: "추가하기",
  CANCEL_BUTTON: "취소",
  COMPLETE_BUTTON: (count: number) => `${count}명 완료`,
  ORDER_SUCCESS_MESSAGE: "주문 완료",
} as const;

export const MAX_RECEIVERS: number = 10;

export const DEFAULT_RECEIVER = {
  name: "",
  phone: "",
  quantity: "",
} as const;

export const RECEIVER_MODIFIY_BUTTON = "수정";
