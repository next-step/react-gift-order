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
};
