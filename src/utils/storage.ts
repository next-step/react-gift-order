import { EMAIL_STORAGE_KEY } from "@/constants";

interface UserInfo {
  email: string;
}

export const setUserInfo = (userInfo: UserInfo) => {
  try {
    const userInfoString = JSON.stringify(userInfo);
    sessionStorage.setItem(EMAIL_STORAGE_KEY, userInfoString);
  } catch (e) {
    console.error("세션 스토리지에 키 저장하기 실패", e);
  }
};

export const getUserInfo = (): (UserInfo & { userName: string }) | null => {
  try {
    const userInfoString = sessionStorage.getItem(EMAIL_STORAGE_KEY);
    if (!userInfoString) return null;
    const userInfo = JSON.parse(userInfoString) as UserInfo;
    const userName = userInfo ? userInfo.email.split("@")[0] : "";
    return { ...userInfo, userName };
  } catch (e) {
    console.error("세션 스토리지에서 키 가져오기 실패", e);
    return null;
  }
};

export const removeUserInfo = () => {
  sessionStorage.removeItem(EMAIL_STORAGE_KEY);
};
