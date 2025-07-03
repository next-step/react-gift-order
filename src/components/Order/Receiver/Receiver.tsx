import {
  ReceiverInput,
  ReceiverWrapper,
  RecevierSpan, RecevierTitle, Row,
} from '@/components/Order/Receiver/Receiver.style.ts';

export default function Receiver({ setCount }) {

  return (
    <ReceiverWrapper>
      <RecevierTitle>받는 사람</RecevierTitle>

      <Row>
        <RecevierSpan>이름</RecevierSpan>
        <ReceiverInput type="text" placeholder='이름을 입력하세요.'/>
      </Row>

      <Row>
        <RecevierSpan>전화번호</RecevierSpan>
        <ReceiverInput type="text" placeholder='전화번호를 입력하세요.'/>
      </Row>

      <Row>
        <RecevierSpan>수량</RecevierSpan>
        <ReceiverInput type='number' defaultValue='1' min='1' onChange={e => setCount(e.target.value)}/>
      </Row>
    </ReceiverWrapper>
  )
}
