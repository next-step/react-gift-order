import { Flex, SideFlex } from '@/components/common/SidePadding';
import { Padding2 } from '@/components/common/Padding';
import { Label } from '../ReceiverModal.style';
import { Input, InputWrapper } from '@/components/common/Input';
import { nameValidatior, phoneValidator, quantityValidatior } from '@/utils/validators';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { OrderFormData } from '../../receiverlist/types';
interface ReceiverError {
  name?: FieldError;
  phone?: FieldError;
  quantity?: FieldError;
}
interface ReceiverFormProps {
  register: UseFormRegister<OrderFormData>;
  index: number;
  handleClose: (index: number) => void;
  error?: ReceiverError;
}

const ReceiverForm = ({ register, index, error, handleClose }: ReceiverFormProps) => {
  const nameErrorMessage = error && error.name?.message;
  const phoneErrorMessage = error && error.phone?.message;
  const quantityErrorMessage = error && error.quantity?.message;
  return (
    <div>
      <SideFlex>
        <p>받는 사람 {index + 1}</p>
        <svg
          onClick={() => handleClose(index)}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x"
          aria-hidden="true"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </SideFlex>
      <Flex>
        <Label>이름</Label>
        <InputWrapper>
          <Input
            {...register(`receivers.${index}.name`, {
              validate: nameValidatior,
            })}
            placeholder="이름을 입력하세요."
          />
          {nameErrorMessage ? <p>{nameErrorMessage}</p> : ''}
        </InputWrapper>
      </Flex>
      <Padding2 />
      <Flex>
        <Label>전화번호</Label>
        <InputWrapper>
          <Input
            type="text"
            {...register(`receivers.${index}.phone`, {
              required: '전화번호를 반드시 입력하세요.',
              validate: phoneValidator,
            })}
            placeholder="전화번호를 입력하세요."
          />
          {phoneErrorMessage ? <p>{phoneErrorMessage}</p> : ''}
        </InputWrapper>
      </Flex>
      <Padding2 />
      <Flex>
        <Label>수량</Label>
        <InputWrapper>
          <Input
            {...register(`receivers.${index}.quantity`, {
              valueAsNumber: true,
              validate: quantityValidatior,
            })}
            type="number"
            min="1"
          />
          {quantityErrorMessage ? <p>{quantityErrorMessage}</p> : ''}
        </InputWrapper>
      </Flex>
    </div>
  );
};

export default ReceiverForm;
