import { Title, SendeInfo, SenderName, SenderWrapper } from '@/components/Order/Sender/Sender.style.ts';
import LabeledInput from '@/components/Common/LabeldInput/LabeldInput.tsx';
import { JSX } from 'react';

export default function Sender({ sender, setSender }) {
  return (
    <SenderWrapper>
      <Title>보내는 사람</Title>

      <LabeledInput
        input={
          <SenderName
            isActive={ sender.check }
            type='text'
            placeholder='이름을 입력하세요.'
            onChange={e =>
              setSender({
                text: e.target.value,
                check: false, }
              )}
          />
        }
        showError={sender.check}
        errorMessage='이름을 입력해주세요.'
        comment= {<SendeInfo>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</SendeInfo>}
      />
    </SenderWrapper>
  )
}