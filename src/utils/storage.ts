export const getStorageItem = (key: string) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item ${key} from sessionStorage`, error);
    sessionStorage.removeItem(key);
    return null;
  }
};

export const setStorageItem = (key: string, value: any) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item ${key} in sessionStorage`, error);
  }
};

export const removeStorageItem = (key: string) => {
  sessionStorage.removeItem(key);
};
