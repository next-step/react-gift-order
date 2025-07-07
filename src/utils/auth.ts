export const getUserName = (email: string | undefined) => {
  if (!email) {
    return "";
  }
  const atIndex = email.indexOf("@");
  if (atIndex < 1) {
    return "";
  }
  return email.substring(0, atIndex);
};
