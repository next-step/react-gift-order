export const validateEmail = (value: string) => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
};

export const validatePassword = (value: string) => {
    if (!value) return "PW를 입력해주세요.";
    if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
};

export const validateMessage = (value: string) => {
    if (!value) return "메시지를 입력해주세요.";
    return "";
};

export const validateName = (value: string) => {
    if (!value) return "이름을 입력해주세요.";
    return "";
};

export const validatePhone = (value: string) => {
    if (!value) return "전화번호를 입력해주세요.";
    const phoneRegex = /^010\d{8}$/;
    if (!phoneRegex.test(value)) return "전화번호 형식을 확인해주세요. (01012345678)";
    return "";
};

export const validateQuantity = (value: number) => {
    if (value < 1) return "수량은 1개 이상이어야 해요.";
    return "";
};