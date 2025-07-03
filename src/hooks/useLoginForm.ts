import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validators";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleEmailChange = (value: string) => {
    const err = validateEmail(value);

    setEmail(value);
    setEmailError(err);
    setIsButtonEnabled(err === "" && passwordError === "");
  };

  const handlePasswordChange = (value: string) => {
    const err = validatePassword(value);

    setPassword(value);
    setPasswordError(err);
    setIsButtonEnabled(emailError === "" && err === "");
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    isButtonEnabled,
    handleEmailChange,
    handlePasswordChange,
  };
};
