// export const validateEmail = (value: string): string | null => {
//   if (!value.trim()) return "이메일을 입력해주세요.";
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(value)) return "이메일은 이메일 형식으로 입력해주세요.";
//   return null;
// };

// export const validatePassword = (value: string): string | null => {
//   if (!value.trim()) return "비밀번호를 입력해주세요.";
//   if (value.length < 8) return "비밀번호는 최소 8자 이상이어야 합니다.";
//   return null;
// };

// export const validateMessage = (v: any): string | null =>
//   typeof v === "string" && v.trim() ? null : "메시지를 입력해주세요.";

// export const validateSender = (v: any): string | null =>
//   typeof v === "string" && v.trim()
//     ? null
//     : "보내는 사람 이름이 반드시 필요해요.";

// export const validateReceiver = (v: any): string | null =>
//   typeof v === "string" && v.trim()
//     ? null
//     : "받는 사람 이름이 반드시 필요해요.";

// export const validatePhone = (v: any): string | null =>
//   typeof v === "string" && /^010\d{8}$/.test(v)
//     ? null
//     : "전화번호는 01012341234 형식으로 입력하세요.";

// export const validateQuantity = (v: any): string | null => {
//   const num = typeof v === "number" ? v : parseInt(v, 10);
//   return num >= 1 ? null : "수량은 1개 이상이어야 해요.";
// };
