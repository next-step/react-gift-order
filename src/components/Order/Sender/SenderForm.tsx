import { SenderInput, SendError, SendInfo } from '@/components/Order/Sender/Sender.style.ts';

export default function SenderForm({ value, onChange, error }) {
  return (
    <>
      <SenderInput
        value={value}
        onChange={onChange}
        placeholder="이름을 입력하세요."
        isActive={error}
      />
      {error ? <SendError>{error.message}</SendError> :
        <SendInfo>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SendInfo>}

    </>
  )
}
