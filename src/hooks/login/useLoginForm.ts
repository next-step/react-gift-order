import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { setUserInfo } from "@/utils/storage";
import { useRouter } from "@/hooks/common/useRouter";
import { loginSchema, type LoginFormData } from "@/utils";

export const useLoginForm = () => {
  const { navigate, location } = useRouter();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });
  const watchedValues = watch();

  const isFormValid = (() => {
    try {
      loginSchema.parse(watchedValues);
      return true;
    } catch {
      return false;
    }
  })();

  const onSubmit = (values: LoginFormData) => {
    setUserInfo({ email: values.id });
    const previousPage = location.state?.from;
    const redirectPath = previousPage || searchParams.get("redirect") || "/";
    navigate(redirectPath);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isFormValid: isFormValid,
  };
};
