import orderCard from '@/mocks/order_card.mock';
import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
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
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  border: 3px solid transparent;
  ${({ isActive }) => isActive && `border: 3px solid black;`}
`;

// 카드 뷰 시작
const CardViewWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4};

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const CardViewImg = styled.img`
  width: 360px;
  height: 240px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const CardViewTxt = styled.textarea`
  width: 95%;
  height: ${({ theme }) => theme.spacing.spacing10};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray900};
  }
  padding: ${({ theme }) => theme.spacing.spacing3};

  font-size: ${({ theme }) => theme.typography.body.body1Regular};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular};
  line-height: ${({ theme }) => theme.typography.body.body1Regular};
`;

// 보내는 사람 시작
const SenderInputWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const SenderInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.lineHeight};
  margin-bottom: 10px;
`;

const SenderInput = styled.input`
  width: 95%;
  height: 30px;

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray900};
  }

  padding: ${({ theme }) => theme.spacing.spacing3};
`;

// 받는사람 시작
const ReceiverInputWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const ReceiverInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;


const ReceiverInputNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ReceiverInputNameLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
const ReceiverInputName = styled.input`
  width:85%;
  height: ${({ theme }) => theme.spacing.spacing9};
  border-radius: 5px;
  border: 1px solid gray;
`;


const ReceiverInputPhoneNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ReceiverInputPhoneNumberLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
const ReceiverInputPhoneNumber = styled.input`
  width:85%;
  height: ${({ theme }) => theme.spacing.spacing9};
  border-radius: 5px;
  border: 1px solid gray;
`;


const ReceiverItemNumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ReceiverItemNumInputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;
const ReceiverItemNumInput = styled.input`
  width:85%;
  height: ${({ theme }) => theme.spacing.spacing9};
  border-radius: 5px;
  border: 1px solid gray;
`;


// 상품정보 시작
const ItemInfoWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const ItemInfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const ItemInfoBox = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 7px;

  display: flex;
  align-items: center;
`

const ItemInfoBoxImg = styled.img`
  width: ${({ theme }) => theme.spacing.spacing15};
  height: ${({ theme }) => theme.spacing.spacing15};
  border-radius: 5px;
`

const ItemBoxTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.spacing2};
`

const ItemBoxTxtTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
`

const ItemBoxTxtSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};
`

const ItemBoxTxtPrice = styled.p`
    font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
    font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
    line-height: ${({ theme }) => theme.typography.label.label1Bold.lineHeight};
`

const ItemBoxTxtPriceLabel = styled.span`
    font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.gray.gray600};
`


// 주문 버튼 시작
const OrderBtnWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing12};

  position: absolute;
  bottom: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`

const OrderButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border: none;

  font-size: ${({ theme }) => theme.typography.body.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Bold.lineHeight};
`;

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
  const brandInfo = searchParams.get('brandInfo');
  const id = searchParams.get('id');
  const imageURL = searchParams.get('imageURL');
  const name = searchParams.get('name');
  const price = Number(searchParams.get('price'));

  // const selectedItem = sessionStorage.getItem('selectedItem');


  const navigate = useNavigate();

  // 이벤트 핸들러
  function onCardClick(id: number) {
    handleChangeSelectedId(id);
  }

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
    <Layout>
      <NavBar></NavBar>
      {/* 슬라이딩 카드 */}
      <SlidingCardSelectorWrapper>
        {orderCard.map((item) => (
          <SlidingCard
            key={item.id}
            src={item.thumbUrl}
            alt={item.defaultTextMessage}
            onClick={() => onCardClick(item.id)}
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
        <ReceiverInputTitle>받는 사람</ReceiverInputTitle>
        <ReceiverInputNameWrapper>
          <ReceiverInputNameLabel htmlFor="ReceiverInputName">
            이름
          </ReceiverInputNameLabel>
          <ReceiverInputName
            placeholder="이름을 입력하세요."
            value={receiverName}
            onChange={(e) => { handleChangeReceiverName(e.target.value) }}
          ></ReceiverInputName>
        </ReceiverInputNameWrapper>
        <ReceiverInputPhoneNumberWrapper>
          <ReceiverInputPhoneNumberLabel htmlFor="ReceiverInputName">
            전화번호
          </ReceiverInputPhoneNumberLabel>
          <ReceiverInputPhoneNumber
            placeholder="전화번호를 입력하세요"
            value={receiverPhoneNum}
            onChange={(e) => handleChangeReceiverPhoneNum(e.target.value)}
          ></ReceiverInputPhoneNumber>
        </ReceiverInputPhoneNumberWrapper>
        <ReceiverItemNumWrapper>
          <ReceiverItemNumInputLabel htmlFor="ReceiverInputName">
            수량
          </ReceiverItemNumInputLabel>
          <ReceiverItemNumInput
            placeholder="수량"
            value={itemCount}
            onChange={(e) => handleChangeItemCount(parseInt(e.target.value))}
          ></ReceiverItemNumInput>
        </ReceiverItemNumWrapper>
      </ReceiverInputWrapper>

      {/* 상품 정보 */}
      <ItemInfoWrapper>
        <ItemInfoTitle>상품 정보</ItemInfoTitle>
        <ItemInfoBox>
          <ItemInfoBoxImg src={String(imageURL)} alt={String(name)} />
          <ItemBoxTxtWrapper>
            <ItemBoxTxtTitle>{name}</ItemBoxTxtTitle>
            <ItemBoxTxtSubTitle>{brandInfo}</ItemBoxTxtSubTitle>
            <ItemBoxTxtPrice><ItemBoxTxtPriceLabel>상품가 </ItemBoxTxtPriceLabel>{price}원</ItemBoxTxtPrice>
          </ItemBoxTxtWrapper>
        </ItemInfoBox>
      </ItemInfoWrapper>

      {/* 주문 버튼 */}
      <OrderBtnWrapper>
        <OrderButton onClick={onClickHandler}>
          {29000 * itemCount}원 주문하기
        </OrderButton>
      </OrderBtnWrapper>
    </Layout>
  );
}

export default Order;
