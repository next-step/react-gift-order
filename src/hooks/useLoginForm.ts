import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email: string) => {
  if (!email) return "ID를 입력해주세요.";
  if (!EMAIL_REGEX.test(email)) return "ID는 이메일 형식으로 입력해주세요.";
  return "";
};

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  return {
    email,
    password,
    emailError,
    handleChange,
    handleBlur,
  };
};
