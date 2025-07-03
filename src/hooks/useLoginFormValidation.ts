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

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleEmailInput = (value: string) => {
    setEmail(value);
    if (emailTouched) {
      setEmailError(checkEmailValidation(value));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(checkEmailValidation(email));
  };

  const handlePasswordInput = (value: string) => {
    setPassword(value);
    if (passwordTouched) {
      setPasswordError(checkPasswordValidation(value));
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(checkPasswordValidation(password));
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleEmailInput,
    handleEmailBlur,
    handlePasswordInput,
    handlePasswordBlur,
  };
};
