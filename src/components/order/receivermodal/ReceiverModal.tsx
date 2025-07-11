import { PaddingSm, Padding2 } from '../../common/Padding';
import { YellowBtn } from '../../common/Buttons';
import { GrayNoticeSm } from '../../common/GrayNotice';
import { Background, FormList, ModalWrapper } from './ReceiverModal.style';
import {
  useFieldArray,
  type Control,
  type FieldError,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form';

import type { OrderFormData } from '../receiverlist/types';

import ReceiverForm from './receiveform/ReceiverForm';
import { Flex } from '@/components/common/SidePadding';
import { GrayBtn } from '../../common/Buttons';

interface ReceiverError {
  name?: FieldError;
  phone?: FieldError;
  quantity?: FieldError;
}
interface ReceiverModalProps {
  register: UseFormRegister<OrderFormData>;
  error?: FieldErrors<OrderFormData>['receivers'];
  control: Control<OrderFormData>;
  handleSubmit: UseFormHandleSubmit<OrderFormData>;
  setIsVisible: (visible: boolean) => void;
}
const ReceiverModal = ({
  register,
  error,
  control,
  handleSubmit,
  setIsVisible,
}: ReceiverModalProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers',
  });
  //TODO: 10명 초과하면 버튼 비활성화 되도록 만들기

  const handleClickAddBtn = () => {
    if (fields.length < 10) append({ name: '', phone: '', quantity: 1 });
  };

  const handleClose = (key: number) => {
    console.log(key);
    remove(key);
  };
  const onValid = () => {
    setIsVisible(false);
  };

  return (
    <Background>
      <ModalWrapper>
        <div>
          <p>받는 사람</p>
          <PaddingSm />
          <GrayNoticeSm>
            * 최대 10명까지 추가 할 수 있어요. <br />* 받는 사람의 전화번호를 중복으로 입력할 수
            없어요.
          </GrayNoticeSm>
          <Padding2 />
          <GrayBtn onClick={handleClickAddBtn}>추가하기</GrayBtn>
        </div>
        <FormList>
          {fields.map((field, index) => (
            <ReceiverForm
              error={(error?.[index] as ReceiverError) ?? undefined}
              key={field.id}
              register={register}
              index={index}
              handleClose={handleClose}
            />
          ))}
        </FormList>
        <Flex>
          <GrayBtn onClick={() => setIsVisible(false)}>취소</GrayBtn>
          <YellowBtn onClick={handleSubmit(onValid)}>{fields.length}명 완료</YellowBtn>
        </Flex>
      </ModalWrapper>
    </Background>
  );
};

export default ReceiverModal;
