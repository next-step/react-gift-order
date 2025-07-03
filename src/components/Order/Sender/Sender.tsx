import { Title, SendeInfo, SenderName, SenderWrapper } from '@/components/Order/Sender/Sender.style.ts';

export default function Sender() {
  return (
    <SenderWrapper>
      <Title>보내는 사람</Title>
      <SenderName type='text' placeholder='이름을 입력하세요.'/>
      <SendeInfo >* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</SendeInfo>
    </SenderWrapper>
  )
}