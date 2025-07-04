import {
  ReceiverInput,
  ReceiverNameInput, ReceiverPhoneInput,
  ReceiverWrapper,
  RecevierTitle,
} from '@/components/Order/Receiver/Receiver.style.ts';
import LabeledInput from '@/components/Common/LabeldInput/LabeldInput.tsx';
import { JSX } from 'react';

export default function Receiver({ setCount, receiverName, setReceiverName, receiverPhone, setReceiverPhone }) {

  return (
    <ReceiverWrapper>
      <RecevierTitle>받는 사람</RecevierTitle>

      <LabeledInput
        label="이름"
        input={
          <ReceiverNameInput
            isNameActive={receiverName.check}
            type="text"
            value={receiverName.text}
            placeholder='이름을 입력하세요.'
            onChange={e =>
              setReceiverName({ text: e.target.value, check: false })
          }
          />
        }
        showError={receiverName.check}
        errorMessage="이름을 입력해주세요."
      />

      <LabeledInput
        label='전화번호'
        input={
          <ReceiverPhoneInput
            isPhoneActive={receiverPhone.check}
            isFormActive={receiverPhone.checkPhoneForm}
            type="text"
            value={receiverPhone.text}
            placeholder='전화번호를 입력하세요.'
            onChange={e =>
              setReceiverPhone({
                text: e.target.value,
                check: false ,
                checkPhoneForm: false,
              })
            }
          />

        }
        showError={receiverPhone.check || receiverPhone.checkPhoneForm}
        errorMessage={
          receiverPhone.checkPhoneForm
            ? '전화번호 형식이 올바르지 않습니다.'
            : '전화번호를 입력해주세요.'
        }
      />

      <LabeledInput
        label='수량'
        input={
          <ReceiverInput
            type='number'
            defaultValue='1'
            min='1'
            onChange={e => setCount(e.target.value)}
          />
        }
      />
    </ReceiverWrapper>
  )
}
