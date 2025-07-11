import orderCard from '@/mocks/order_card.mock';
import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PHONE_NUM_REGEX } from '@/utils/regex';

import useOrderForm from '@/hooks/useOrderForm';


// 슬라이딩 카드 시작
const SlidingCardSelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  overflow-x: scroll;
`;

const SlidingCard = styled.img<{ isActive: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 3px solid transparent;
  ${({ isActive }) => isActive && `border: 3px solid black;`}
`;

// 카드 뷰 시작
const CardViewWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const CardViewImg = styled.img`
  width: 380px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const CardViewTxt = styled.textarea`
  width: 650px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: 10px;
`;

// 보내는 사람 시작
const SenderInputWrapper = styled.div`
  padding: 20px;
`;

const SenderInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;

const SenderInput = styled.input`
  width: 660px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: 10px;
`;

// 받는사람 시작
const ReceiverInputWrapper = styled.div`
  padding: 20px;
`;

const ReceiverInput = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;


const ReceiverInputNameLabel = styled.label``;

const ReceiverInputName = styled.input``;

const ReceiverInputPhoneNumberLabel = styled.label``;

const ReceiverInputPhoneNumber = styled.input``;

const ReceiverItemNumInputLabel = styled.label``;

const ReceiverItemNumInput = styled.input``;


// 상품정보 시작
const ItemInfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;

const ItemInfoWrapperStyle = styled.div`
  padding: 20px;
`;

interface ItemInfoWrapperProps {
  selectedItem: {
    brandInfo: { name: string };
    id: string;
    imageURL: string;
    name: string;
    price: { sellingPrice: number };
  };
}

function ItemInfoWrapper({ selectedItem }: ItemInfoWrapperProps) {
  return (
    <ItemInfoWrapperStyle>
      <ItemInfoTitle>상품 정보</ItemInfoTitle>
      <img src={selectedItem.imageURL} alt={selectedItem.name} />
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.brandInfo.name}</p>
      <p>{selectedItem.price.sellingPrice.toLocaleString()}원</p>
    </ItemInfoWrapperStyle>
  );
}

// 주문 버튼 시작
const OrderButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  width: 100%;
  height: 50px;
  border: none;
`;

interface ButtonProps {
  receiverName: string;
  // setReceiverName: React.Dispatch<React.SetStateAction<string>>;
  receiverPhoneNum: string;
  // setReceiverPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  itemCount: number;
  // setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

function OrderButton({
  receiverName,
  receiverPhoneNum,
  itemCount,
}: ButtonProps) {
  const navigate = useNavigate();

  function onClickHandler() {
    let blocking = 0;

    if (receiverName === '') {
      blocking++;
    }
    if (!PHONE_NUM_REGEX.test(receiverPhoneNum)) {
      blocking++;
    }
    if (itemCount < 1) {
      blocking++;
    }

    if (blocking > 0) {
      return 0;
    }

    alert('주문이 완료되었습니다.');
    navigate('/');
  }

  return (
    <OrderButtonStyle onClick={onClickHandler}>
      {29000 * itemCount}원 주문하기
    </OrderButtonStyle>
  );
}

function Order() {
  const {
    selectedId,
    senderName,
    receiverName,
    receiverPhoneNum,
    itemCount,
    handleChangeSelectedId,
    handleChangeSenderName,
    handleChangeReceiverName,
    handleChangeReceiverPhoneNum,
    handleChangeItemCount,
  } = useOrderForm();

  const [searchParams] = useSearchParams();
  const selectedItem = {
    brandInfo: { name: searchParams.get('brandInfo') || '' },
    id: searchParams.get('id') || '',
    imageURL: searchParams.get('imageURL') || '',
    name: searchParams.get('name') || '',
    price: {
      sellingPrice: Number(searchParams.get('price') || '0'),
    },
  };
  // const selectedItem = sessionStorage.getItem('selectedItem');


  // 이벤트 핸들러
  function onCardClick(id: number) {
    handleChangeSelectedId(id);
  }

  return (
    <Layout>
      <NavBar></NavBar>
      {/* 슬라이딩 카드 */}
      <SlidingCardSelectorWrapper>
        {orderCard.map((item) => (
          <SlidingCard
            key={item.id}
            src={item.thumbUrl}
            alt={item.defaultTextMessage}
            onClick={() =>
              onCardClick(item.id)
            }
            isActive={selectedId === item.id}
          ></SlidingCard>
        ))}
      </SlidingCardSelectorWrapper>

      {/* 카드뷰  */}
      <CardViewWrapper>
        <CardViewImg src={orderCard.find(c => c.id === selectedId)?.imageUrl} alt={orderCard.find(c => c.id === selectedId)?.defaultTextMessage}></CardViewImg>
        <CardViewTxt value={orderCard.find(c => c.id === selectedId)?.defaultTextMessage}>
        </CardViewTxt>
      </CardViewWrapper>

      {/* 보내는 사람 */}
      <SenderInputWrapper>
          <SenderInputTitle>보내는 사람</SenderInputTitle>
          <SenderInput
            placeholder="이름을 입력하세요."
            onChange={((e) => handleChangeSenderName(e.target.value))}
            value={senderName}
          ></SenderInput>
      </SenderInputWrapper>

      {/* 받는사람 */}
      <ReceiverInputWrapper>
          <ReceiverInput>받는 사람</ReceiverInput>
          <ReceiverInputNameLabel htmlFor="ReceiverInputName">
            이름
          </ReceiverInputNameLabel>
          <ReceiverInputName
            placeholder="이름을 입력하세요."
            value={receiverName}
            onChange={(e) => {handleChangeReceiverName(e.target.value)}}
          ></ReceiverInputName>
          <ReceiverInputPhoneNumberLabel htmlFor="ReceiverInputName">
            전화번호
          </ReceiverInputPhoneNumberLabel>
          <ReceiverInputPhoneNumber
            placeholder="전화번호를 입력하세요"
            value={receiverPhoneNum}
            onChange={(e) => handleChangeReceiverPhoneNum(e.target.value)}
          ></ReceiverInputPhoneNumber>
          <ReceiverItemNumInputLabel htmlFor="ReceiverInputName">
            수량
          </ReceiverItemNumInputLabel>
          <ReceiverItemNumInput
            placeholder="수량"
            value={itemCount}
            onChange={(e) => handleChangeItemCount(parseInt(e.target.value))}
          ></ReceiverItemNumInput>
      </ReceiverInputWrapper>

      {/* 상품 정보 */}
      <ItemInfoWrapper selectedItem={selectedItem}>

      </ItemInfoWrapper>

      {/* 주문 버튼 */}
      <OrderButton
        receiverName={receiverName}
        receiverPhoneNum={receiverPhoneNum}
        itemCount={itemCount}
      ></OrderButton>
    </Layout>
  );
}

export default Order;
