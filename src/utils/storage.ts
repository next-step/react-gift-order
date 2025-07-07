import type { User } from '@/types/auth';

const AUTH_STORAGE_KEY = 'kakao-gift-auth';

/**
 * 사용자 정보를 localStorage에 저장
 */
export const saveAuthToStorage = (user: User): void => {
  try {
    const authData = JSON.stringify(user);
    localStorage.setItem(AUTH_STORAGE_KEY, authData);
  } catch (error) {
    console.error('로그인 정보 저장 실패:', error);
  }
};

/**
 * localStorage에서 사용자 정보 불러오기
 */
export const loadAuthFromStorage = (): User | null => {
  try {
    const authData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!authData) {
      return null;
    }

    const user = JSON.parse(authData) as User;

    // 기본적인 유효성 검사
    if (!user.email || typeof user.email !== 'string') {
      console.warn('저장된 로그인 정보가 유효하지 않습니다.');
      removeAuthFromStorage();
      return null;
    }

    return user;
  } catch (error) {
    console.error('로그인 정보 불러오기 실패:', error);
    removeAuthFromStorage(); // 손상된 데이터 정리
    return null;
  }
};

/**
 * localStorage에서 사용자 정보 삭제
 */
export const removeAuthFromStorage = (): void => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error('로그인 정보 삭제 실패:', error);
  }
};
