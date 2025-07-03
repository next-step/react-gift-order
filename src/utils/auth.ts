export const getUserName = (email: string) => {
  return email.split("@")[0];
};
