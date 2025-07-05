import type { FormData, ValidationErrors } from "@/utils/type";
import { useSearchParams } from "react-router-dom";
import { setUserInfo } from "@/utils/storage";
import { useRouter } from "@/hooks/common/useRouter";
import { useForm } from "@/hooks/common/useForm";
import { loginValidationRules } from "@/utils/login-validator";
import { useMemo } from "react";

interface UseLoginFormProps {
  errors: ValidationErrors<FormData>;
  isFormValid: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  register: <K extends keyof FormData>(
    field: K,
  ) => {
    name: K;
    value: FormData[K];
    onChange: (e: React.ChangeEvent<HTMLInputElement> | FormData[K]) => void;
    onBlur: () => void;
    error: string | undefined;
    hasError: boolean;
  };
}

export const useLoginForm = (): UseLoginFormProps => {
  const { navigate, location } = useRouter();
  const [searchParams] = useSearchParams();

  const {
    errors,
    register,
    handleSubmit: handleFormSubmit,
    formIsValid,
  } = useForm<FormData>({
    initialValues: { id: "", password: "" },
    validationRules: loginValidationRules,
    onSubmit: values => {
      setUserInfo({ email: values.id });
      const previousPage = location.state?.from;
      const redirectPath = previousPage || searchParams.get("redirect") || "/";
      navigate(redirectPath);
    },
  });

  return {
    errors,
    isFormValid: formIsValid,
    register,
    handleSubmit: handleFormSubmit,
  };
};
