export const ERROR_MESSAGES = {
  LOGIN: {
    ID_EMPTY: "아이디를 입력해주세요.",
    ID_INVALID: "아이디는 이메일 형식으로 입력해주세요.",
    PW_EMPTY: "비밀번호를 입력해주세요.",
    PW_TOO_SHORT: (min: number) =>
      `비밀번호는 최소 ${min}자 이상이어야 합니다.`,
  },

  SYSTEM: {
    USER_LOAD_ERROR: "유저 정보 로드 중 오류가 발생했습니다.",
  },

  VALIDATE: {
    NAME: "이름을 입력해주세요.",
    MESSGE: "메시지를 입력해주세요.",
    PHONE: "전화번호를 입력해주세요.",
    PHONE_TYPE: "올바른 전화번호 형식이 아닙니다. (예: 01012341234)",
    QUANTITY: "수량은 최소 1개 이상이어야 합니다.",
    SELECT_RECEIVER: "받는 사람을 선택해주세요.",
    DUPLICATE_PHONE: "중복된 전화번호입니다.",
    MAX_RECEIVER_NUMBER: "최대 10명까지 등록할 수 있습니다.",
  },
};
