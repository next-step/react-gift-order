import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const NAME_REQUIRED_MESSAGE = '이름을 입력해주세요.';
const PHONENUMBER_REQUIRED_MESSAGE = '전화번호를 입력해주세요.';
const PHONENUMBER_INVALID_MESSAGE = '올바른 전화번호 형식이 아닙니다.';
const QUANTITY_MIN_MESSAGE = '구매수량은 1개 이상이어야 합니다.';
const PHONE_REGEX = /^010\d{7,8}$/;
const DEFAULT_QUANTITY = '1';

export const orderSchema = z.object({
  recipientName: z.string().min(1, NAME_REQUIRED_MESSAGE),
  recipientPhone: z
    .string()
    .min(1, PHONENUMBER_REQUIRED_MESSAGE)
    .regex(PHONE_REGEX, PHONENUMBER_INVALID_MESSAGE),
  quantity: z.string().refine((val) => Number(val) >= 1, {
    message: QUANTITY_MIN_MESSAGE,
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
      quantity: DEFAULT_QUANTITY,
    },
  });

  return methods;
};

export default useOrderForm;
