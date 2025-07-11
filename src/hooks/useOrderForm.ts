import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const phoneRegex = /^010\d{7,8}$/;

export const orderSchema = z.object({
  recipientName: z.string().min(1, '이름을 입력해주세요.'),
  recipientPhone: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(phoneRegex, '올바른 전화번호 형식이 아닙니다.'),
  quantity: z.string().refine((val) => Number(val) >= 1, {
    message: '구매수량은 1개 이상이어야 합니다.',
  }),
});

export type OrderSchema = z.infer<typeof orderSchema>;

export interface OrderValues {
  recipientName: string;
  recipientPhone: string;
  quantity: string;
}

const useOrderForm = () => {
  const methods = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      recipientName: '',
      recipientPhone: '',
      quantity: '1',
    },
  });

  return methods;
};

export default useOrderForm;
