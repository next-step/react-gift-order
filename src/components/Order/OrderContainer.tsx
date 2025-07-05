import StyledTopestDiv from '@styles/StyledTopesDiv';
import OrderCardTemplateContainer from '@components/Order/OrderCardTemplateContainer';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GOODS_DATA, type Goods } from '@assets/goodsData';
import { Spacer } from '@styles/Spacer';
import { ErrorMsg } from '@styles/ErrorMsg';
import { useCommonOrderForm } from '@hooks/useOrderForm';
import { useMsgForm } from '@hooks/useMsgForm';
import { StyledSendPersonContainer } from '@styles/Order/OrderContainer/StyledSendPersonContainer';
import { SyltedOrderInput } from '@styles/Order/OrderContainer/SyltedOrderInput';
import { StyledReceivePersonContainer } from '@styles/Order/OrderContainer/StyledReceivePersonContainer';
import { StyledItemInfoContainer } from '@styles/Order/OrderContainer/StyledItemInfoContainer';
import { StyledOrderButton } from '@styles/Order/OrderContainer/StyledOrderButton';

const OrderContainer = () => {
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Goods | null>(null);

  // 분리된 두 훅 사용
  const { commonFormValues, commonErrorMsgs, handleCommonChange, validateCommonForm } = useCommonOrderForm();
  const { msg, msgError, handleMsgChange, validateMsg, setMsg } = useMsgForm();
  const { sendName, receiveName, receiveTel, count } = commonFormValues;

  const totalPrice = selectedProduct ? selectedProduct.price.sellingPrice * count : 0;

  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      const foundProduct = GOODS_DATA.find((item: Goods) => item.id.toString() === productId);
      setSelectedProduct(foundProduct || null);
    } else {
      setSelectedProduct(GOODS_DATA.length > 0 ? GOODS_DATA[0] : null);
    }
  }, [searchParams]);

  const handleOrderSubmit = () => {
    // 각 input에 대한 유효성 검사를 2개의 훅을 통해 수행
    validateCommonForm();
    validateMsg();
  };

  return (
    <StyledTopestDiv>
      {/* Card 생성 컴포넌트*/}
      {/* props로 유효성 검사에 필요한 핸들러와 state들을 전달*/}
      <OrderCardTemplateContainer
        msg={msg} // useMsgForm의 msg 값
        onMsgChange={handleMsgChange} // useMsgForm의 handleMsgChange 함수
        msgError={msgError} // useMsgForm의 msgError 값
        setMsg={setMsg}
      />

      <StyledSendPersonContainer className='send-person background-default'>
        <p className='title2Bold'>보내는 사람</p>
        <SyltedOrderInput
          type='text'
          name='sendName'
          className='send-person-name body2Regular'
          placeholder='이름을 입력하세요'
          value={sendName}
          onChange={handleCommonChange} // useCommonOrderForm의 handleCommonChange
          hasError={!!commonErrorMsgs[0]} // commonErrorMsgs 인덱스에 맞게 수정
        />
        {commonErrorMsgs[0] ? (
          <ErrorMsg>{commonErrorMsgs[0]}</ErrorMsg>
        ) : (
          <p className='margin-left-20 label2Regular'>* 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.</p>
        )}
      </StyledSendPersonContainer>
      <StyledReceivePersonContainer className='receive-person background-default'>
        <div>
          <p className='title2Bold'>받는 사람</p>
        </div>
        <div>
          <p className='basic-label'>이름</p>
          <SyltedOrderInput
            type='text'
            name='receiveName'
            className='send-person-name body2Regular'
            placeholder='이름을 입력하세요'
            value={receiveName}
            onChange={handleCommonChange}
            hasError={!!commonErrorMsgs[1]}
          />
        </div>
        {commonErrorMsgs[1] && <ErrorMsg>{commonErrorMsgs[1]}</ErrorMsg>}
        <div>
          <p className='basic-label'>전화번호</p>
          <SyltedOrderInput
            type='text'
            name='receiveTel'
            className='send-person-name body2Regular'
            placeholder='전화번호를 입력하세요'
            value={receiveTel}
            onChange={(e) => handleCommonChange({ ...e, target: { ...e.target, value: e.target.value.replace(/[^0-9]/g, '') } })}
            hasError={!!commonErrorMsgs[2]}
          />
        </div>
        {commonErrorMsgs[2] && <ErrorMsg>{commonErrorMsgs[2]}</ErrorMsg>}
        <div>
          <p className='basic-label'>수량</p>
          <SyltedOrderInput
            type='number'
            name='count'
            className='send-person-name body2Regular'
            placeholder='수량을 입력하세요'
            min='1'
            value={count}
            onChange={handleCommonChange}
            hasError={!!commonErrorMsgs[3]}
          />
        </div>
        {commonErrorMsgs[3] && <ErrorMsg>{commonErrorMsgs[3]}</ErrorMsg>}
      </StyledReceivePersonContainer>

      <StyledItemInfoContainer className='item-info background-default'>
        <p className='title2Bold basic-label'>상품 정보</p>
        {selectedProduct ? (
          <div className='item-info-text'>
            <img src={selectedProduct.imageURL} alt={selectedProduct.name} className='item-info-img' loading='lazy' />
            <div>
              <p className='body1Regular'>{selectedProduct.name}</p>
              <p className='label2Regular'>{selectedProduct.brandInfo.name}</p>

              <p className='item-price body2Bold basic-label'>
                <span className='label1Regular'>상품가 </span>
                {totalPrice.toLocaleString()} 원
              </p>
            </div>
          </div>
        ) : (
          <p>선택된 상품이 없습니다.</p>
        )}
      </StyledItemInfoContainer>

      <StyledOrderButton className='order body1Bold' onClick={handleOrderSubmit}>
        {selectedProduct ? `${count}개 구매하기 (${totalPrice.toLocaleString()}원)` : '상품을 선택해주세요'}
      </StyledOrderButton>
      <Spacer />
    </StyledTopestDiv>
  );
};

export default OrderContainer;
