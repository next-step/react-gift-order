import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import { OutlineInputField } from '@/components/Form/InputField/OutlineInputField';
import type { OrderFormData } from '@/schemas/orderForm';
import styled from '@emotion/styled';

import type { UseFormReturn } from 'react-hook-form';

type Props = {
  formHandler: UseFormReturn<OrderFormData>;
};

export const OrderFormOrdererFields = ({ formHandler }: Props) => {
  const {
    register,
    formState: { errors },
  } = formHandler;
  return (
    <Wrapper>
      <HorizontalSpacing size='spacing3' />
      <Typography variant='title2Bold' color='gray900'>
        보내는 사람
      </Typography>
      <HorizontalSpacing size='spacing3' />
      <OutlineInputField
        placeholder='이름을 입력하세요.'
        {...register('ordererName')}
        invalid={!!errors.ordererName}
        message={
          errors.ordererName?.message ?? '* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.'
        }
      />
      <HorizontalSpacing size='spacing6' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;
