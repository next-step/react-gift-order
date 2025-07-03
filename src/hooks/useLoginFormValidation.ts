import { useState } from "react";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "@/utils/checkValidation";

export const useLoginFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | null>("");
  const [passwordError, setPasswordError] = useState<string | null>("");

  const handleEmailInput = (value: string) => {
    const error = checkEmailValidation(value);

    setEmail(value);
    setEmailError(error);
  };

  const handlePasswordInput = (value: string) => {
    const error = checkPasswordValidation(value);

    setPassword(value);
    setPasswordError(error);
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleEmailInput,
    handlePasswordInput,
  };
};
