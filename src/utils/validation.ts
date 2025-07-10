export const isBlank = (v: string) => v.trim() === '';

export const isPhone = (v: string) => /^01[016789]\d{7,8}$/.test(v);
