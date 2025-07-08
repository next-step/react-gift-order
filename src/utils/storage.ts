import { EMAIL_STORAGE_KEY } from "@/constants";

type TypeGuard<T> = (value: unknown) => value is T;

interface UserInfo {
  email: string;
}

export const setSessionStorageItem = <T>(key: string, value: T) => {
  try {
    const stringifiedValue = JSON.stringify(value);
    sessionStorage.setItem(key, stringifiedValue);
  } catch (e) {
    console.error(
      `세션 스토리지에 아이템("${key}")을 저장하는데 실패했습니다:`,
      e,
    );
  }
};

export const getSessionStorageItem = <T>(
  key: string,
  typeGuard: TypeGuard<T>,
): T | null => {
  try {
    const itemString = sessionStorage.getItem(key);
    if (!itemString) return null;

    const parsedItem: unknown = JSON.parse(itemString);

    if (typeGuard(parsedItem)) {
      return parsedItem;
    }

    console.warn(
      `세션 스토리지에 있는 아이템("${key}")의 데이터 구조가 올바르지 않습니다. 아이템을 삭제합니다.`,
    );
    sessionStorage.removeItem(key);
    return null;
  } catch (e) {
    console.error(
      `세션 스토리지에서 아이템("${key}")을 가져오는데 실패했습니다:`,
      e,
    );
    return null;
  }
};

export const removeSessionStorageItem = (key: string) => {
  sessionStorage.removeItem(key);
};

const isUserInfo = (value: unknown): value is UserInfo => {
  return (
    typeof value === "object" &&
    value !== null &&
    "email" in value &&
    typeof (value as { email: unknown }).email === "string"
  );
};

export const setUserInfo = (userInfo: UserInfo) => {
  setSessionStorageItem(EMAIL_STORAGE_KEY, userInfo);
};

export const getUserInfo = (): (UserInfo & { userName: string }) | null => {
  const userInfo = getSessionStorageItem(EMAIL_STORAGE_KEY, isUserInfo);

  if (!userInfo) {
    return null;
  }

  const userName = userInfo.email.split("@")[0];
  return { ...userInfo, userName };
};

export const removeUserInfo = () => {
  removeSessionStorageItem(EMAIL_STORAGE_KEY);
};
