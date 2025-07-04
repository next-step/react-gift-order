import StyledTopestDiv from '@/styles/StyledTopesDiv';
import styled from '@emotion/styled';
import OrderCardTemplateContainer from '@components/OrderCardTemplateContainer';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GOODS_DATA, type Goods } from '@/assets/goodsData';
import { Spacer } from '@/styles/Spacer'; // Spacer 컴포넌트 import는 그대로 유지

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

const SyltedOrderInput = styled.input`
  padding: 6px 12px;
  width: 100%;
`;

const StyledOrderButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 720px; /* StyledTopestDiv의 width와 동일하게 설정 */
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
  color: black; /* 텍스트 색상을 검정으로 설정하여 카카오 옐로우에 잘 보이도록 */
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 720px; /* 모바일 뷰포트에서 고정 너비 유지 */
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
  // 수량(quantity) 상태 추가, 기본값은 1
  const [quantity, setQuantity] = useState<number>(1);

  // 총 금액을 계산하는 변수
  const totalPrice = selectedProduct ? selectedProduct.price.sellingPrice * quantity : 0;

  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      const foundProduct = GOODS_DATA.find((item: Goods) => item.id.toString() === productId);
      setSelectedProduct(foundProduct || null);
    } else {
      setSelectedProduct(GOODS_DATA.length > 0 ? GOODS_DATA[0] : null);
    }
    // 상품이 변경될 때 수량을 1로 초기화 (선택 사항)
    setQuantity(1);
  }, [searchParams]);

  // 수량 입력값 변경 핸들러
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // 숫자로 변환
    // 숫자가 아니거나 1 미만이면 1로 설정, 아니면 해당 값 사용
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <StyledTopestDiv>
      <OrderCardTemplateContainer />
      <StyledSendPersonContainer className='send-person background-default'>
        <p className='title2Bold'>보내는 사람</p>
        <input type='text' className='send-person-name body2Regular' placeholder='이름을 입력하세요' />
        <p className='margin-left-20 label2Regular'>* 실제 선물 발송시 발신자이름으로 반영되는 정보입니다.</p>
      </StyledSendPersonContainer>
      <StyledReceivePersonContainer className='receive-person background-default'>
        <div>
          <p className='title2Bold'>받는 사람</p>
        </div>
        <div>
          <p>이름</p>
          <SyltedOrderInput type='text' className='send-person-name body2Regular' placeholder='이름을 입력하세요' />
        </div>
        <div>
          <p>전화번호</p>
          <SyltedOrderInput type='text' className='send-person-name body2Regular' placeholder='전화번호를 입력하세요' />
        </div>
        <div>
          <p>수량</p>
          <SyltedOrderInput
            type='number'
            className='send-person-name body2Regular'
            placeholder='수량을 입력하세요'
            min='1'
            value={quantity} // value 속성을 quantity 상태와 연결
            onChange={handleQuantityChange} // 변경 핸들러 추가
          />
        </div>
      </StyledReceivePersonContainer>

      <StyledItemInfoContainer className='item-info background-default'>
        <p className='title2Bold'>상품 정보</p>
        {selectedProduct ? (
          <div className='item-info-text'>
            <img src={selectedProduct.imageURL} alt={selectedProduct.name} className='item-info-img' />
            <div>
              <p className='body1Regular'>{selectedProduct.name}</p>
              <p className='label2Regular'>{selectedProduct.brandInfo.name}</p>

              <p className='item-price body2Bold'>
                <span className='label1Regular'>상품가 </span>
                {selectedProduct.price.sellingPrice.toLocaleString()} 원
              </p>
            </div>
          </div>
        ) : (
          <p>선택된 상품이 없습니다.</p>
        )}
      </StyledItemInfoContainer>

      <StyledOrderButton className='order body1Bold'>
        {selectedProduct ? `(${totalPrice.toLocaleString()}원)` : '상품을 선택해주세요'}
      </StyledOrderButton>
      <Spacer />
    </StyledTopestDiv>
  );
};

export default OrderContainer;
