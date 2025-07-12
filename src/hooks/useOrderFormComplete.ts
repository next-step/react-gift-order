import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import templates from '@src/assets/mock/order_card_template';

export const senderSchema = z.object({
  letter: z.string().min(1, '메시지를 입력해주세요.'),
  senderName: z.string().min(1, '이름을 입력해주세요.'),
});

export type SenderSchema = z.infer<typeof senderSchema>;

const useOrderFormComplete = () => {
  const methods = useForm<SenderSchema>({
    resolver: zodResolver(senderSchema),
    defaultValues: {
      letter: templates[0].defaultTextMessage,
      senderName: '',
    },
  });

  return methods;
};

export default useOrderFormComplete;
