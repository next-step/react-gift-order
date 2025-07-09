import orderCard from '@/mocks/order_card.mock';
import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PHONE_NUM_REGEX } from '@/utils/regex';

interface OrderCardProps {
  setSelectedCardImg: Function;
  setSelectedCardTxt: Function;
  selectedId: number | null;
  setSelectedId: Function;
}

function SlidingOrderCardWrapper({
  setSelectedCardImg,
  setSelectedCardTxt,
  selectedId,
  setSelectedId,
}: OrderCardProps) {
  function onCardClick(id: number, img: string, txt: string) {
    setSelectedId(id);
    setSelectedCardImg(img);
    setSelectedCardTxt(txt);
  }

  return (
    <SlidingOrderCardWrapperStyle>
      {orderCard.map((item) => (
        <SlidingOrderCard
          src={item.thumbUrl}
          key={item.id}
          alt={item.defaultTextMessage}
          onClick={() =>
            onCardClick(item.id, item.imageUrl, item.defaultTextMessage)
          }
          isActive={selectedId === item.id}
        ></SlidingOrderCard>
      ))}
    </SlidingOrderCardWrapperStyle>
  );
}

const SlidingOrderCardWrapperStyle = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: scroll;
  padding: 10px;
`;

const SlidingOrderCard = styled.img<{ isActive: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 3px solid transparent;

  ${({ isActive }) => isActive && `border: 3px solid black;`}
`;

const CardViewWrapperStyle = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface CardViewProps {
  selectedCardImg: string;
  selectedCardTxt: string;
}

function CardViewWrapper({ selectedCardImg, selectedCardTxt }: CardViewProps) {
  return (
    <CardViewWrapperStyle>
      <CardImg src={selectedCardImg} alt={selectedCardTxt}></CardImg>
      <CardViewTextArea value={selectedCardTxt}></CardViewTextArea>
    </CardViewWrapperStyle>
  );
}

const CardImg = styled.img`
  width: 380px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const CardViewTextArea = styled.textarea`
  width: 650px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  padding: 10px;
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

const SenderInputWrapperStyle = styled.div`
  padding: 20px;
`;

interface SenderInputProps {
  setSenderName: React.Dispatch<React.SetStateAction<string>>;
  senderName: string;
}

function SenderInputWrapper({ setSenderName, senderName }: SenderInputProps) {
  return (
    <SenderInputWrapperStyle>
      <SenderInputTitle>보내는 사람</SenderInputTitle>
      <SenderInput
        placeholder="이름을 입력하세요."
        onChange={(e) => setSenderName(e.target.value)}
        value={senderName}
      ></SenderInput>
    </SenderInputWrapperStyle>
  );
}

const ReceiverInput = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;

const ReceiverInputWrapperStyle = styled.div`
  padding: 20px;
`;

interface ReceiverInputProps {
  receiverName: string;
  setReceiverName: React.Dispatch<React.SetStateAction<string>>;
  receiverPhoneNum: string;
  setReceiverPhoneNum: React.Dispatch<React.SetStateAction<string>>;
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

// TODO
function ReceiverInputWrapper({
  receiverName,
  setReceiverName,
  receiverPhoneNum,
  setReceiverPhoneNum,
  itemCount,
  setItemCount,
}: ReceiverInputProps) {
  return (
    <ReceiverInputWrapperStyle>
      <ReceiverInput>받는 사람</ReceiverInput>
      <ReceiverInputNameLabel htmlFor="ReceiverInputName">
        이름
      </ReceiverInputNameLabel>
      <ReceiverInputName
        placeholder="이름을 입력하세요."
        value={receiverName}
        onChange={(e) => setReceiverName(e.target.value)}
      ></ReceiverInputName>
      <ReceiverInputPhoneNumberLabel htmlFor="ReceiverInputName">
        전화번호
      </ReceiverInputPhoneNumberLabel>
      <ReceiverInputPhoneNumber
        placeholder="전화번호를 입력하세요"
        value={receiverPhoneNum}
        onChange={(e) => setReceiverPhoneNum(e.target.value)}
      ></ReceiverInputPhoneNumber>
      <ReceiverItemNumInputLabel htmlFor="ReceiverInputName">
        수량
      </ReceiverItemNumInputLabel>
      <ReceiverItemNumInput
        placeholder="수량"
        value={itemCount}
        onChange={(e) => setItemCount(parseInt(e.target.value))}
      ></ReceiverItemNumInput>
    </ReceiverInputWrapperStyle>
  );
}

const ReceiverInputNameLabel = styled.label``;

const ReceiverInputName = styled.input``;

const ReceiverInputPhoneNumberLabel = styled.label``;

const ReceiverInputPhoneNumber = styled.input``;

const ReceiverItemNumInputLabel = styled.label``;

const ReceiverItemNumInput = styled.input``;

const ItemInfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  margin-bottom: 10px;
`;

const ItemInfoWrapperStyle = styled.div`
  padding: 20px;
`;

function ItemInfoWrapper({ selectedItem }: { selectedItem: string | null }) {
  const item = selectedItem ? JSON.parse(selectedItem) : null;

  if (!item) return null;

  return (
    <ItemInfoWrapperStyle>
      <ItemInfoTitle>상품 정보</ItemInfoTitle>
      <img src={item.imageURL} alt="item.name" />
      <h2>{item.name}</h2>
      <p>{item.brandInfo.name}</p>
      <p>{item.price.sellingPrice}원</p>
    </ItemInfoWrapperStyle>
  );
}

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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCardImg, setSelectedCardImg] = useState(orderCard[0].imageUrl);
  const [selectedCardTxt, setSelectedCardTxt] = useState(
    orderCard[0].defaultTextMessage,
  );

  const [senderName, setSenderName] = useState('');

  const [receiverName, setReceiverName] = useState('');
  const [receiverPhoneNum, setReceiverPhoneNum] = useState('');
  const [itemCount, setItemCount] = useState(1);

  const selectedItem = sessionStorage.getItem('selectedItem');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar></NavBar>
        <SlidingOrderCardWrapper
          setSelectedCardImg={setSelectedCardImg}
          setSelectedCardTxt={setSelectedCardTxt}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        ></SlidingOrderCardWrapper>
        <CardViewWrapper
          selectedCardImg={selectedCardImg}
          selectedCardTxt={selectedCardTxt}
        ></CardViewWrapper>
        <SenderInputWrapper
          setSenderName={setSenderName}
          senderName={senderName}
        ></SenderInputWrapper>
        <ReceiverInputWrapper
          setReceiverName={setReceiverName}
          receiverName={receiverName}
          setReceiverPhoneNum={setReceiverPhoneNum}
          receiverPhoneNum={receiverPhoneNum}
          setItemCount={setItemCount}
          itemCount={itemCount}
        ></ReceiverInputWrapper>
        <ItemInfoWrapper selectedItem={selectedItem}></ItemInfoWrapper>
        <OrderButton
          receiverName={receiverName}
          receiverPhoneNum={receiverPhoneNum}
          itemCount={itemCount}
        ></OrderButton>
      </Layout>
    </ThemeProvider>
  );
}

export default Order;
