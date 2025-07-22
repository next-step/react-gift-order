import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { TextArea } from '@/components/common/TextArea';
import { ReceiverModal } from '@/components/ReceiverModal';
import { useModal } from '@/contexts/ModalContext';
import { OrderFormModel, type OrderFormModelType } from '@/models/OrderFormModel';
import { useOrderStore } from '@/stores/orderStore';

interface OrderFormProps {
  totalPrice: number;
}

export function OrderForm({ totalPrice }: OrderFormProps) {
  const { receivers, setReceivers } = useOrderStore();
  const { open } = useModal();

  const methods = useForm<OrderFormModelType>({
    resolver: zodResolver(OrderFormModel),
    defaultValues: {
      message: '',
      senderName: '',
      receivers: { receivers },
    },
  });

  useEffect(() => {
    methods.reset({ receivers: { receivers } });
  }, [receivers, methods]);

  const onSubmit = (data: OrderFormModelType) => {
    console.log(data);
    setReceivers(data.receivers.receivers);
    alert('주문이 완료되었습니다.');
  };

  const handleOpenReceiverModal = () => {
    open(<ReceiverModal />);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldSet>
          <TextArea
            placeholder="메시지를 입력해주세요."
            {...methods.register('message')}
            error={methods.formState.errors.message?.message}
          />
        </FieldSet>

        <Divider />

        <FieldSet>
          <Legend>보내는 사람</Legend>
          <Input
            placeholder="이름을 입력하세요."
            {...methods.register('senderName')}
            error={methods.formState.errors.senderName?.message}
          />
        </FieldSet>

        <Divider />

        <FieldSet>
          <Legend>받는 사람</Legend>
          <ReceiverInfo>
            {receivers.length > 0
              ? `총 ${receivers.length}명`
              : '받는 사람을 추가해주세요.'}
          </ReceiverInfo>
          <Button type="button" onClick={handleOpenReceiverModal} variant="secondary">
            추가하기
          </Button>
        </FieldSet>

        <SubmitButton type="submit">{`${totalPrice.toLocaleString()}원 주문하기`}</SubmitButton>
      </Form>
    </FormProvider>
  );
}

const Form = styled.form`
  padding: 20px;
`;

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.body.body1Bold};
  margin-bottom: 8px;
`;

const ReceiverInfo = styled.div`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.colors.gray.gray700};
  margin-bottom: 8px;
`;

const Divider = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.gray.gray100};
  margin: 24px -20px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;