import { StyledSendPersonContainer } from '@/styles/Order/OrderContainer/StyledSendPersonContainer';
import { SyltedOrderInput } from '@/styles/Order/OrderContainer/SyltedOrderInput';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface SenderContainerProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const SenderContainer = ({ register, errors }: SenderContainerProps) => {
  return (
    <StyledSendPersonContainer className='send-person background-default'>
      <p className='title2Bold'>보내는 사람</p>
      <SyltedOrderInput
        id='senderName'
        type='text'
        {...register('senderName', { required: '발신자 이름은 필수입니다.' })}
        className={errors.senderName ? 'border-red' : ''}
      />
      {errors.senderName && <p className='margin-left-20 label2Reuglar font-red'>{errors.senderName.message?.toString()}</p>}
      {!errors.sendName && <p className='margin-left-20 label2Regular '>* 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.</p>}
    </StyledSendPersonContainer>
  );
};

export default SenderContainer;
