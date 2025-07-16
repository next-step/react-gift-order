import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './schemas/loginSchema';
import type { z } from 'zod';

type LoginFormType = z.infer<typeof LoginSchema>;

export const useLoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
    setValue,
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  return {
    email: {
      ...register('email'),
      value: getValues('email'),
      change: (v: string) => setValue('email', v, { shouldValidate: true }),
      error: errors.email?.message || '',
      validate: () => trigger('email'),
    } as const,
    password: {
      ...register('password'),
      value: getValues('password'),
      change: (v: string) => setValue('password', v, { shouldValidate: true }),
      error: errors.password?.message || '',
      validate: () => trigger('password'),
    } as const,
    isValid,
  };
};
