import { ErrorMessage, TextArea } from '@/components/Order/Message/Message.style.ts';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: { message?: string };
}

export default function MessageInput({ value, onChange, error }: Props) {
  return (
    <>
      <TextArea
        value={value}
        onChange={onChange}
        isActive={error}
        placeholder="메시지를 입력해주세요."
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
}
