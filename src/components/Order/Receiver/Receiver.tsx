import {
  Column,
  ReceiverInput,
  ReceiverNameInput, ReceiverPhoneInput, ReceiverWarn,
  ReceiverWrapper,
  RecevierSpan, RecevierTitle, Row,
} from '@/components/Order/Receiver/Receiver.style.ts';

export default function Receiver({ setCount, receiverName, setReceiverName, receiverPhone, setReceiverPhone }) {

  return (
    <ReceiverWrapper>
      <RecevierTitle>받는 사람</RecevierTitle>

      <Row>
        <RecevierSpan>이름</RecevierSpan>
        <Column>
          <ReceiverNameInput isNameActive={receiverName.check} type="text" value={receiverName.text} placeholder='이름을 입력하세요.' onChange={e => setReceiverName({ text: e.target.value, check: false })}/>
          {receiverName.check && <ReceiverWarn>이름을 입력해주세요.</ReceiverWarn>}
        </Column>
      </Row>

      <Row>
        <RecevierSpan>전화번호</RecevierSpan>
        <Column>
          <ReceiverPhoneInput isPhoneActive={receiverPhone.check}  isFormActive={receiverPhone.checkPhoneForm} type="text" value={receiverPhone.text} placeholder='전화번호를 입력하세요.' onChange={e => setReceiverPhone({ text: e.target.value, check: false ,checkPhoneForm: false })}/>
          {receiverPhone.check && <ReceiverWarn>전화번호를 입력해주세요.</ReceiverWarn>}
          {receiverPhone.checkPhoneForm && <ReceiverWarn>전화번호 형식이 올바르지 않습니다.</ReceiverWarn>}
        </Column>
      </Row>

      <Row>
        <RecevierSpan>수량</RecevierSpan>
        <ReceiverInput type='number' defaultValue='1' min='1' onChange={e => setCount(e.target.value)}/>
      </Row>
    </ReceiverWrapper>
  )
}
