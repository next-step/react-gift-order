import styled from '@emotion/styled';
import { forwardRef, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { TextArea } from '@/components/common/TextArea';
import { ReceiverModal } from '@/components/ReceiverModal';
import { useModal } from '@/contexts/ModalContext';
import { OrderFormModel, type OrderFormModelType } from '@/models/OrderFormModel';
import { ReceiverList } from '@/components/ReceiverList';
import type { CardTemplate } from '@/types/order';
import { useOrderStore } from '@/stores/orderStore';

interface OrderFormProps {
  selectedCard?: CardTemplate;
}

export const OrderForm = forwardRef<HTMLFormElement, OrderFormProps>(({ selectedCard }, ref) => {
  const { open } = useModal();
  const { receivers: receiversFromStore } = useOrderStore();

  const methods = useForm<OrderFormModelType>({
    resolver: zodResolver(OrderFormModel),
    defaultValues: {
      message: selectedCard?.defaultTextMessage || '',
      senderName: '',
      receivers: { receivers: receiversFromStore },
    },
  });

  const receivers = methods.watch('receivers.receivers');

  useEffect(() => {
    if (selectedCard) {
      methods.setValue('message', selectedCard.defaultTextMessage);
    }
  }, [selectedCard, methods]);

  useEffect(() => {
    methods.setValue('receivers.receivers', receiversFromStore);
  }, [receiversFromStore, methods]);

  const onSubmit = (data: OrderFormModelType) => {
    console.log(data);
    alert('주문이 완료되었습니다.');
  };

  const handleOpenReceiverModal = () => {
    open(<ReceiverModal />);
  };

  return (
    <FormProvider {...methods}>
      <Form ref={ref} onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldSet>
          <TextArea
            placeholder="메시지를 입력해주세요."
            {...methods.register('message')}
            error={methods.formState.errors.message?.message}
          />
        </FieldSet>

        <VerticalSpacing size="32px" />
        <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

        <FieldSet>
          <Legend>보내는 사람</Legend>
          <Input
            placeholder="이름을 입력하세요."
            {...methods.register('senderName')}
            error={methods.formState.errors.senderName?.message}
          />
        </FieldSet>

        <VerticalSpacing size="32px" />
        <VerticalSpacing size="8px" backgroundColor="#f3f4f5" />

        <FieldSet>
          <ReceiverLabel>
            <Legend>받는 사람</Legend>
            <Button
              type="button"
              variant="secondary"
              width="56px"
              height="35px"
              onClick={handleOpenReceiverModal}
            >
              {receivers.length !== 0 ? '수정' : '추가'}
            </Button>
          </ReceiverLabel>

          <ReceiverList />
        </FieldSet>
      </Form>
    </FormProvider>
  );
});

const Form = styled.form`
  padding: 0 16px;
`;

import { FieldSet, Legend } from '@/components/common/FieldSet';

const ReceiverLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`;

import { VerticalSpacing } from '@/components/common/VerticalSpacing';
