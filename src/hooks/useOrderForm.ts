import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import templates from '@src/assets/mock/order_card_template';

const phoneRegex = /^010\d{7,8}$/;

const orderSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  senderName: z.string().min(1, '이름을 입력해주세요.'),
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
  message: string;
  senderName: string;
  recipientName: string;
  recipientPhone: string;
  quantity: string;
}

const useOrderForm = () => {
  const methods = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      message: templates[0].defaultTextMessage,
      senderName: '',
      recipientName: '',
      recipientPhone: '',
      quantity: '1',
    },
  });

  return methods;
};

export const validateField = (
  name: string,
  value: string
): string | undefined => {
  switch (name) {
    case 'recipientName':
      if (!value.trim()) return '이름을 입력해주세요.';
      break;
    case 'recipientPhone':
      if (!value.trim()) return '전화번호를 입력해주세요.';
      if (!/^010\d{7,8}$/.test(value))
        return '올바른 전화번호 형식이 아닙니다.';
      break;
    case 'quantity':
      if (Number(value) < 1) return '구매수량은 1개 이상이어야 합니다.';
      break;
    default:
      return undefined;
  }
  return undefined;
};

export default useOrderForm;
