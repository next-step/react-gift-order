export const getUserName = (email: string | undefined) => {
  if (!email) {
    return "";
  }
  return email.split("@")[0];
};
