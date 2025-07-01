import { useState } from "react";
import type { FormData, ValidationErrors } from "@/utils/type";
import { createFieldHandler, validators } from "@/utils/validation";

interface UseLoginFormProps {
  formData: {
    id: string;
    password: string;
  };
  errors: ValidationErrors;
  isFormValid: boolean;
  handleIdChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
  handleIdBlur: () => void;
  handlePasswordBlur: () => void;
}

export const useLoginForm = (): UseLoginFormProps => {
  const [formData, setFormData] = useState<FormData>({ id: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const idHandler = createFieldHandler(
    "id",
    setFormData,
    setErrors,
    !!errors.id,
  );
  const passwordHandler = createFieldHandler(
    "password",
    setFormData,
    setErrors,
    !!errors.password,
  );

  const isFormValid = Object.entries(formData).every(
    ([key, value]) => !validators[key as keyof typeof validators](value),
  );

  return {
    formData,
    errors,
    isFormValid,
    handleIdChange: idHandler.onChange,
    handlePasswordChange: passwordHandler.onChange,
    handleIdBlur: () => idHandler.onBlur(formData.id),
    handlePasswordBlur: () => passwordHandler.onBlur(formData.password),
  };
};
