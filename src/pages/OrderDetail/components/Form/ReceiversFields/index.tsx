import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { Typography } from '@/components/common/Typography';
import { useModal } from '@/providers/Modal';
import type { OrderFormData } from '@/schemas/orderForm';

import styled from '@emotion/styled';

import type { UseFormReturn } from 'react-hook-form';
import { ReceiversFormModal } from './ReceiversFormModal';

import { ReceiversFieldsResultTable } from './ResultTable';

type Props = {
  formHandler: UseFormReturn<OrderFormData>;
};

export const OrderFormReceiversFields = ({ formHandler }: Props) => {
  const { open: openModal } = useModal();
  const { watch, setValue } = formHandler;

  const receivers = watch('receivers');
  const hasReceiver = receivers.length > 0;

  const handleReceivers = () => {
    const handleChange = (value: OrderFormData['receivers']) => {
      setValue('receivers', value);
    };

    openModal(<ReceiversFormModal value={receivers} onChange={handleChange} />, {
      closeOnDimClick: false,
    });
  };

  return (
    <Wrapper>
      <HorizontalSpacing size='spacing3' />
      <TitleWrapper>
        <Typography variant='title2Bold' color='gray900'>
          받는 사람
        </Typography>
        <Button onClick={handleReceivers}>{hasReceiver ? '수정' : '추가'}</Button>
      </TitleWrapper>
      <HorizontalSpacing size='spacing3' />
      <ReceiversFieldsResultTable receivers={receivers} />
      <HorizontalSpacing size='spacing6' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
`;

const Button = styled.button(({ theme }) => ({
  ...theme.typography.label1Regular,
  padding: `${theme.spacing.spacing2} ${theme.spacing.spacing4}`,
  borderRadius: theme.spacing.spacing2,
  backgroundColor: theme.colors.scale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms, opacity 200ms',

  '&:hover:not(:disabled)': {
    backgroundColor: theme.colors.scale.gray400,
  },

  '&:active:not(:disabled)': {
    backgroundColor: theme.colors.scale.gray500,
  },
}));
