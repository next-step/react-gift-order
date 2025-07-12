import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const EMAIL_REQUIRED_ERROR = 'ID를 입력해주세요.';
const EMAIL_INVALID_FORMAT_ERROR = 'ID는 이메일 형식으로 입력해주세요.';

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REQUIRED_ERROR = 'PW를 입력해주세요.';
const PASSWORD_MIN_LENGTH_ERROR = `PW는 최소 ${PASSWORD_MIN_LENGTH}글자 이상이어야 합니다.`;

const emailSchema = z
  .string()
  .nonempty(EMAIL_REQUIRED_ERROR)
  .refine((val) => {
    try {
      z.email().parse(val);
      return true;
    } catch {
      return false;
    }
  }, EMAIL_INVALID_FORMAT_ERROR);

const loginSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .nonempty(PASSWORD_REQUIRED_ERROR)
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const formValue = watch();
  const isError = {
    email: errors.email?.message ?? '',
    password: errors.password?.message ?? '',
  };

  return {
    register,
    handleSubmit,
    formValue,
    setValue,
    isError,
    loginActivated: isValid,
  };
};

export default useLoginForm;
