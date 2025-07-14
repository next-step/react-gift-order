import type { UserInfo } from '@/types/userInfo';

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `kakaotech/${key}`;

  const get = () => {
    const value = storage.getItem(storageKey);

    if (!value) return undefined;

    return JSON.parse(value) as StorageKey[T];
  };

  const set = (value: StorageKey[T]) => {
    storage.setItem(storageKey, JSON.stringify(value));
  };

  const remove = () => {
    storage.removeItem(storageKey);
  };

  return {
    get,
    set,
    remove,
  };
};

type StorageKey = {
  userInfo: UserInfo;
};

export const userInfoStorage = initStorage('userInfo', sessionStorage);
