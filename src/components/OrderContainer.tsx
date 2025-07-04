import StyledTopestDiv from '@/styles/StyledTopesDiv';
import styled from '@emotion/styled';
import OrderCardTemplateContainer from '@components/OrderCardTemplateContainer';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GOODS_DATA, type Goods } from '@/assets/goodsData';
import { Spacer } from '@/styles/Spacer';

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
  width: 720px;
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.sementicPalette.kakaoYellow};
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
  const [searchParams] = useSearchParams(); // 쿼리 파라미터
  const [selectedProduct, setSelectedProduct] = useState<Goods | null>(null); // 선택된 상품 상태 관리

  useEffect(() => {
    const productId = searchParams.get('productId'); // URL에서 productId 값 가져오기
    if (productId) {
      // GOODS_DATA에서 해당 ID를 가진 상품 찾기
      const foundProduct = GOODS_DATA.find((item: Goods) => item.id.toString() === productId);
      setSelectedProduct(foundProduct || null); // 찾았으면 설정, 없으면 null
    } else {
      // productId가 없을 경우 기본값 설정 (예: GOODS_DATA의 첫 번째 상품)
      setSelectedProduct(GOODS_DATA.length > 0 ? GOODS_DATA[0] : null);
    }
  }, [searchParams]); // searchParams가 변경될 때마다 useEffect 재실행

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
          <SyltedOrderInput type='number' className='send-person-name body2Regular' placeholder='수량을 입력하세요' min='1' />
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

      <StyledOrderButton className='order body1Bold'>주문하기</StyledOrderButton>
      <Spacer />
    </StyledTopestDiv>
  );
};

export default OrderContainer;
