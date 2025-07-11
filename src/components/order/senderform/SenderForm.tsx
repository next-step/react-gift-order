import { Padding3, PaddingMd } from '../../common/Padding';
import { PaddingSm } from '@/components/common/Padding';

import type { UseFormRegister } from 'react-hook-form';
import { SidePadding } from '@/components/common/SidePadding';
import { Input, InputWrapper, Title } from '@/components/common/Input';
import { GrayNoticeSm } from '@/components/common/GrayNotice';
import type { OrderFormData } from '../receiverlist/types';

interface SenderFormProps {
  register: UseFormRegister<OrderFormData>;
  error?: string;
}
const SenderForm = ({ register, error }: SenderFormProps) => {
  return (
    <SidePadding>
      <Padding3 />
      <Title>보내는 사람</Title>
      <Padding3 />
      <InputWrapper>
        <Input {...register('senderName')}></Input>
        {error && <p>{error}</p>}
        <PaddingSm />
        <GrayNoticeSm>* 실제 선물 발송 시 발신자 이름으로 반영되는 정보입니다.</GrayNoticeSm>
      </InputWrapper>
      <PaddingMd />
    </SidePadding>
  );
};

export default SenderForm;
