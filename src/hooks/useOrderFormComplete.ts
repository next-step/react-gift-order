import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import templates from '@src/assets/mock/order_card_template';

const LETTER_REQUIRED_MESSAGE = '메시지를 입력해주세요.';
const SENDER_NAME_REQUIRED_MESSAGE = '이름을 입력해주세요.';
const DEFAULT_LETTER_MESSAGE = templates[0].defaultTextMessage;

export const senderSchema = z.object({
  letter: z.string().min(1, LETTER_REQUIRED_MESSAGE),
  senderName: z.string().min(1, SENDER_NAME_REQUIRED_MESSAGE),
});

export type SenderSchema = z.infer<typeof senderSchema>;

const useOrderFormComplete = () => {
  const methods = useForm<SenderSchema>({
    resolver: zodResolver(senderSchema),
    defaultValues: {
      letter: DEFAULT_LETTER_MESSAGE,
      senderName: '',
    },
  });

  return methods;
};

export default useOrderFormComplete;
