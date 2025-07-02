import { useState } from "react";
import type { FormData, ValidationErrors } from "@/utils/type";
import { createFieldHandler, validators } from "@/utils/validation";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { setUserInfo } from "@/utils/storage";

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
  handleSubmit: () => void;
}

export const useLoginForm = (): UseLoginFormProps => {
  const [formData, setFormData] = useState<FormData>({ id: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

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

  const handleSubmit = () => {
    if (!isFormValid) return;

    setUserInfo({ email: formData.id });

    const previousPage = location.state?.from;
    const redirectPath = previousPage || searchParams.get("redirect") || "/";
    navigate(redirectPath);
  };

  return {
    formData,
    errors,
    isFormValid,
    handleIdChange: idHandler.onChange,
    handlePasswordChange: passwordHandler.onChange,
    handleIdBlur: () => idHandler.onBlur(formData.id),
    handlePasswordBlur: () => passwordHandler.onBlur(formData.password),
    handleSubmit,
  };
};
