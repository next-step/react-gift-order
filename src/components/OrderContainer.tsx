import StyledTopestDiv from '@/styles/StyledTopesDiv';
import styled from '@emotion/styled';
import OrderCardTemplateContainer from '@components/OrderCardTemplateContainer';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GOODS_DATA, type Goods } from '@/assets/goodsData';
import { Spacer } from '@styles/Spacer';
import { ErrorMsg } from '@styles/ErrorMsg';
import { useCommonOrderForm } from '@/hooks/useOrderForm';
import type { HasErrorProp } from '@/types/HasError';
import { useMsgForm } from '@/hooks/useMsgForm';

const StyledSendPersonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  input {
    padding: 3px 8px;
    margin: 5px 10px;
    height: 30px;
  }
  p {
    margin: 5px 10px;
  }
  .margin-left-20 {
    margin-left: 20px;
  }
`;
const StyledReceivePersonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px;
    gap: 14px;
  }
  p {
    width: 80px;
  }
`;

const SyltedOrderInput = styled.input<HasErrorProp>`
  padding: 6px 12px;
  width: 100%;
  border: 1px solid ${({ theme, hasError }) => (hasError ? theme.palette.red600 : theme.palette.gray300)};
  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => (hasError ? theme.palette.red600 : theme.palette.blue500)};
  }
`;

const StyledOrderButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  color: black;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 720px;
`;

const StyledItemInfoContainer = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .item-info-text {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
    border: 1px solid black;
    padding: 6px 10px;
    border-radius: 10px;
  }

  .item-info-img {
    width: 70px;
    height: 70px;
    border: 1px solid #eee;
  }
  p {
    margin: 5px 10px;
  }
`;

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
    // 각 훅의 유효성 검사를 모두 수행
    validateCommonForm();
    validateMsg();
  };

  return (
    <StyledTopestDiv>
      {/* OrderCardTemplateContainer에 msg 관련 prop 전달 */}
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
        {commonErrorMsgs[0] && <ErrorMsg>{commonErrorMsgs[0]}</ErrorMsg>}
        <p className='margin-left-20 label2Regular'>* 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.</p>
      </StyledSendPersonContainer>
      <StyledReceivePersonContainer className='receive-person background-default'>
        <div>
          <p className='title2Bold'>받는 사람</p>
        </div>
        <div>
          <p>이름</p>
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
          <p>전화번호</p>
          <SyltedOrderInput
            type='text'
            name='receiveTel'
            className='send-person-name body2Regular'
            placeholder='전화번호를 입력하세요'
            value={receiveTel}
            // 전화번호 필드만 추가적인 replace 로직이 있으므로, 여기서 별도로 함수를 만들거나
            // handleCommonChange 내부에서 name에 따라 다르게 처리할 수 있습니다.
            // 여기서는 임시로 익명 함수를 사용합니다.
            onChange={(e) => handleCommonChange({ ...e, target: { ...e.target, value: e.target.value.replace(/[^0-9]/g, '') } })}
            hasError={!!commonErrorMsgs[2]}
          />
        </div>
        {commonErrorMsgs[2] && <ErrorMsg>{commonErrorMsgs[2]}</ErrorMsg>}
        <div>
          <p>수량</p>
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
        <p className='title2Bold'>상품 정보</p>
        {selectedProduct ? (
          <div className='item-info-text'>
            <img src={selectedProduct.imageURL} alt={selectedProduct.name} className='item-info-img' loading='lazy' />
            <div>
              <p className='body1Regular'>{selectedProduct.name}</p>
              <p className='label2Regular'>{selectedProduct.brandInfo.name}</p>

              <p className='item-price body2Bold'>
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
