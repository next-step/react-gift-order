export const setCookieValue = (key: string, value: string) => {
  document.cookie = `${key}=${value}`;
};

export const getCookieValue = (key: string) => {
  const matchValue = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
  return matchValue ? matchValue[2] : null;
};

export const clearCookieValue = (key: string) => {
  document.cookie = `${key}=`;
};
