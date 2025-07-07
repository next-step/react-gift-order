import { StyledSendPersonContainer } from '@/styles/Order/OrderContainer/StyledSendPersonContainer';
import { SyltedOrderInput } from '@/styles/Order/OrderContainer/SyltedOrderInput';
import type { OrderFormValue } from '@/types/OrderFormValues';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface SenderContainerProps {
  register: UseFormRegister<OrderFormValue>;
  errors: FieldErrors<OrderFormValue>;
}

const SenderContainer = ({ register, errors }: SenderContainerProps) => {
  return (
    <StyledSendPersonContainer className='send-person background-default margin-bottom-10'>
      <div>
        <p className='title2Bold'>보내는 사람</p>
      </div>
      <div>
        <SyltedOrderInput
          id='sendName'
          type='text'
          {...register('sendName', { required: '발신자 이름은 필수입니다.' })}
          className={errors.sendName ? 'border-red' : ''}
          placeholder='이름을 입력하세요'
        />
        {errors.sendName && (
          <p className='margin-left-20 label2Regular font-red'>
            {errors.sendName.message?.toString()}
          </p>
        )}
        {!errors.sendName && (
          <p className='margin-left-20 label2Regular'>
            * 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.
          </p>
        )}
      </div>
    </StyledSendPersonContainer>
  );
};

export default SenderContainer;
