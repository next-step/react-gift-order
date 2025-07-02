export const validateEmail = (value: string) => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
};