import { useAuth } from "../contexts/useAuth";

export const useUserGreeting = () => {
  const { isLoggedIn, user } = useAuth();

  const nickname =
    isLoggedIn && user?.email ? user.email.split("@")[0] : "사용자";

  const userEmail = isLoggedIn && user?.email ? user.email : null;
  const userFullName = isLoggedIn && user?.name ? user.name : null;

  return {
    isLoggedIn,
    nickname,
    userEmail,
    userFullName,
    user,
  };
};
