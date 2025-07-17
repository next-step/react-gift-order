import styled from '@emotion/styled';
import Card from '@/components/OrderForm/Card';
import { Sender } from '@/components/OrderForm/Sender';
import { Recipient } from '@/components/OrderForm/Recipient';
import { ProductInfo } from '@/components/OrderForm/ProductInfo';
import { OrderButton } from '@/components/OrderForm/OrderButton';
import productData from '@/data/productData';
import { MOCK_CARDFORM_LIST } from '@/components/OrderForm/mock';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/Routes';
import { useForm, FormProvider, Controller, useWatch } from 'react-hook-form';

const Wrapper = styled.section(({ theme }) => ({
  width: '100%',
  paddingBottom: '3.125rem',
  backgroundColor: theme.semanticColors.background.default,
}));

const Margin = styled.div<{ height: string }>(({ theme, height }) => ({
  width: '100%',
  height: height,
  backgroundColor: theme.semanticColors.background.fill,
}));

// 폼 전체 값 타입
interface RecipientItem {
  name: string;
  phone: string;
  quantity: number;
}
export interface OrderFormValues {
  message: string;
  sender: string;
  recipients: RecipientItem[];
}

const OrderForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get('productId'));
  const selectedProduct = productId === productData.id ? productData : null;
  if (!selectedProduct) return <div>존재하지 않는 상품입니다.</div>;

  const methods = useForm<OrderFormValues>({
    defaultValues: {
      message: MOCK_CARDFORM_LIST[0].defaultTextMessage || '',
      sender: '',
      recipients: [],
    },
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: OrderFormValues) => {
    alert(
      `주문 완료!\n` +
        `상품명: ${selectedProduct.name}\n` +
        `총 수량: ${data.recipients.reduce((s, r) => s + r.quantity, 0)}\n` +
        data.recipients.map((r, i) => `[${i + 1}] ${r.name} (${r.phone}) x${r.quantity}\n`).join('')
    );
    navigate(ROUTE_PATH.HOME);
  };

  const recipients = useWatch({ control: methods.control, name: 'recipients' });
  const totalQuantity = recipients.reduce((sum, r) => sum + (r.quantity ?? 0), 0);
  const totalPrice = selectedProduct.price.sellingPrice * totalQuantity;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          {/* 메시지 카드 */}
          <Controller
            name="message"
            control={control}
            rules={{ required: '메시지를 입력해주세요' }}
            render={({ field }) => (
              <Card
                message={field.value}
                onMessageChange={field.onChange}
                messageError={errors.message?.message}
              />
            )}
          />
          <Margin height="8px" />

          {/* 발신자 입력 */}
          <Controller
            name="sender"
            control={control}
            rules={{ required: '이름을 입력해주세요' }}
            render={({ field }) => (
              <Sender
                value={field.value}
                onChange={field.onChange}
                error={errors.sender?.message}
              />
            )}
          />
          <Margin height="8px" />

          {/* 받는 사람 (모달) */}
          <Recipient />

          <Margin height="8px" />
          <ProductInfo product={selectedProduct} />
          <OrderButton type="submit" totalPrice={totalPrice} />
        </Wrapper>
      </form>
    </FormProvider>
  );
};

export default OrderForm;
