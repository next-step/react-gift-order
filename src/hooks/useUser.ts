export function useUser() {
  return sessionStorage.getItem('userId')?.split('@')[0] ?? '';
}
