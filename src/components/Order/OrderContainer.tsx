import StyledTopestDiv from '@styles/StyledTopesDiv';
import OrderCardTemplateContainer from '@components/Order/OrderCardTemplateContainer';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, type FC } from 'react';
import { GOODS_DATA, type Goods } from '@assets/goodsData';
import { Spacer } from '@styles/Spacer';
import { StyledItemInfoContainer } from '@styles/Order/OrderContainer/StyledItemInfoContainer';
import { StyledOrderButton } from '@styles/Order/OrderContainer/StyledOrderButton';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SenderContainer from './SenderContainer';
import type { OrderFormValue } from '@/types/OrderFormValues';
import RecipientsModalContainer from './RecipientsModalContainer';

const OrderContainer: FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Goods | null>(null);

  // const totalPrice = selectedProduct ? selectedProduct.price.sellingPrice * count : 0;

  //url를 통해 받은 상품 id를 가지고 상품 container를 생성해 렌더링
  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      const foundProduct = GOODS_DATA.find((item: Goods) => item.id.toString() === productId);
      setSelectedProduct(foundProduct || null);
    } else {
      setSelectedProduct(GOODS_DATA.length > 0 ? GOODS_DATA[0] : null);
    }
  }, [searchParams]);

  const methods = useForm<OrderFormValue>({
    defaultValues: {
      msg: '',
      sendName: '',
      recipients: [],
      total_count: 0,
    },
  });
  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<OrderFormValue> = (data) => {
    alert(`Name: ${data.sendName}, Message: ${data.msg}`);
  };
  const currentRecipients = watch('recipients');
  const totalCount = currentRecipients.reduce(
    (sum, recipient) => sum + Number(recipient.count || 0),
    0
  );

  useEffect(() => {
    setValue('total_count', totalCount);
  }, [currentRecipients, setValue, totalCount]);

  const totalPrice = selectedProduct ? totalCount * selectedProduct.price.sellingPrice : 0;

  return (
    <StyledTopestDiv>
      {/* Card 생성 컴포넌트*/}
      {/* props로 유효성 검사에 필요한 핸들러와 state들을 전달*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrderCardTemplateContainer register={register} errors={errors} setValue={setValue} />
        <SenderContainer
          register={register} // senderName, senderContact 필드 등록을 위해 register 전달
          errors={errors} // 해당 필드들의 오류 정보 전달
        />
        <RecipientsModalContainer
          control={control}
          errors={errors}
          currentRecipients={currentRecipients}
        />

        <StyledItemInfoContainer className='item-info background-default'>
          <p className='title2Bold basic-label'>상품 정보</p>
          {selectedProduct ? (
            <div className='item-info-text'>
              <img
                src={selectedProduct.imageURL}
                alt={selectedProduct.name}
                className='item-info-img'
                loading='lazy'
              />
              <div>
                <p className='body1Regular'>{selectedProduct.name}</p>
                <p className='label2Regular'>{selectedProduct.brandInfo.name}</p>

                <p className='item-price body2Bold basic-label'>
                  <span className='label1Regular'>
                    상품가 {selectedProduct.price.sellingPrice}원
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <p>선택된 상품이 없습니다.</p>
          )}
        </StyledItemInfoContainer>

        <StyledOrderButton type='submit' className='order body1Bold'>
          {selectedProduct ? `${totalPrice}원 주문하기 (${totalCount}개)` : '상품을 선택해주세요'}
        </StyledOrderButton>
        <Spacer />
      </form>
    </StyledTopestDiv>
  );
};

export default OrderContainer;
