export const getUserNameFromEmail = (email: string | null): string | null => {
  if (!email) return null;
  return email.split("@")[0];
};
