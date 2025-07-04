import { Title, SendeInfo, SenderName, SenderWrapper } from '@/components/Order/Sender/Sender.style.ts';

export default function Sender({ sender, setSender }) {
  return (
    <SenderWrapper>
      <Title>보내는 사람</Title>
      <SenderName isActive={ sender.check } type='text' placeholder='이름을 입력하세요.' onChange={e => setSender({ text: e.target.value, check: false })}/>
      {sender.check && <div>이름을 입력해주세요.</div>}
      {!sender.check && <SendeInfo >* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</SendeInfo>}
    </SenderWrapper>
  )
}