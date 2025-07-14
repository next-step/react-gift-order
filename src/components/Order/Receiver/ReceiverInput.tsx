import { Input, ItemInput, ReceiverItem } from '@/components/Order/Receiver/Receiver.style.ts';

export default function ReceiverInput({ type = 'text', label, name, placeholder, register, rules, error }) {
  return (
    <ReceiverItem>
      <span>{label}</span>
      <ItemInput>
        <Input
          type={type}
          {...register(name, {
            required: `${label}를 입력해주세요`,
            ...rules, // 여기에 rules 삽입
          })}
          isActive={!!error}
          placeholder={placeholder}
        />
        {error?.message && <p>{error.message}</p>}
      </ItemInput>
    </ReceiverItem>
  );
}
