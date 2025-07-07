import type { FormData, ValidationErrors } from "@/utils/type";
import { useSearchParams } from "react-router-dom";
import { setUserInfo } from "@/utils/storage";
import { useRouter } from "@/hooks/common/useRouter";
import { useForm } from "@/hooks/common/useForm";
import { loginValidationRules } from "@/utils/login-validator";
import type { FormEvent } from "react";
import type { Register } from "@/types/form-register-type";

interface UseLoginFormProps {
  errors: ValidationErrors<FormData>;
  isFormValid: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  register: Register<FormData>;
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
