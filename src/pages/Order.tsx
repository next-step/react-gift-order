import orderCard from '@/mocks/order_card.mock';
import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PHONE_NUM_REGEX } from '@/utils/regex';

import useOrderForm from '@/hooks/useOrderForm';
import { useState } from 'react';



// 슬라이딩 카드 시작
const SlidingCardSelectorWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing4};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};

  overflow-x: scroll;
`;

const SlidingCard = styled.img<{ isActive: boolean }>`
  width: 100px;
  height: 50px;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  border: 3px solid transparent;
  ${({ isActive }) => isActive && `border: 3px solid black;`}
  cursor: pointer;
`;

// 카드 뷰 시작
const CardViewWrapper = styled.div`
  width: auto;
  height: auto;
  padding-top: ${({ theme }) => theme.spacing.spacing3};
  padding-bottom: ${({ theme }) => theme.spacing.spacing9};
  padding-left: ${({ theme }) => theme.spacing.spacing3};
  padding-right: ${({ theme }) => theme.spacing.spacing3};
  border-bottom: ${({ theme }) => theme.spacing.spacing2} solid ${({ theme }) => theme.colors.gray.gray200}; 

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const CardViewImg = styled.img`
  width: 360px;
  height: 240px;
  border-radius: 15px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing9};
`;

const CardViewTxt = styled.textarea`
  width: 95%;
  height: ${({ theme }) => theme.spacing.spacing11};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
  }
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3};

  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
  resize: none;
`;

const CardViewTxtErrorTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  padding: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.red.red700};
  width: 95%;
`

// 보내는 사람 시작
const SenderInputWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.spacing3};
  padding-bottom: ${({ theme }) => theme.spacing.spacing5};
  padding-left: ${({ theme }) => theme.spacing.spacing4};
  padding-right: ${({ theme }) => theme.spacing.spacing4};
  border-bottom: ${({ theme }) => theme.spacing.spacing2} solid ${({ theme }) => theme.colors.gray.gray200}; 
`;

const SenderInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const SenderInput = styled.input`
  width: 95%;
  height: ${({ theme }) => theme.spacing.spacing7};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.gray.gray600};
  }

  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing3};
`;

const SenderInputInfoTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};
  padding: 4px 8px;
`

const SenderInputErrorTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  padding: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.red.red700};
  width: 95%;
`;



// 받는사람 시작
// const ReceiverInputWrapper = styled.div`
//   padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
//   padding-bottom: ${({ theme }) => theme.spacing.spacing4};
//   border-bottom: ${({ theme }) => theme.spacing.spacing2} solid ${({ theme }) => theme.colors.gray.gray200}; 
// `;

// const ReceiverInputTitle = styled.h2`
//   font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
//   font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
//   line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
//   margin-bottom: 10px;
// `;

// const ReceiverInputNameWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverInputNameLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverInputName = styled.input`
//   width: 85%;
//   height: ${({ theme }) => theme.spacing.spacing8};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

// const ReceiverInputPhoneNumberWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverInputPhoneNumberLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverInputPhoneNumber = styled.input`
//   width:85%;
//   height: ${({ theme }) => theme.spacing.spacing9};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

// const ReceiverItemNumWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.spacing2};
// `;

// const ReceiverItemNumInputLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//   color: ${({ theme }) => theme.colors.gray.gray900};
// `;

// const ReceiverItemNumInput = styled.input`
//   width:85%;
//   height: ${({ theme }) => theme.spacing.spacing9};
//   padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

//   border-radius: 8px;
//   border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
//   &:focus {
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.colors.gray.gray700};
//   }

//   &::placeholder {
//     font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
//     font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
//     line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
//     color: ${({ theme }) => theme.colors.gray.gray600};
//   }
// `;

//  const ReceiverInputErrorTxt = styled.p`
//   font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
//   font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
//   line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
//   padding-left: 80px;
//   color: ${({ theme }) => theme.colors.red.red700};
//   width: 95%;
//  `

// 받는 사람 VER2 시작
const ReceiverInputWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
  padding-bottom: ${({ theme }) => theme.spacing.spacing4};
  border-bottom: ${({ theme }) => theme.spacing.spacing2} solid ${({ theme }) => theme.colors.gray.gray200}; 
`;

const ReceiverInputTitleBtnWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const ReceiverInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
`;

const ReceiverInputAddBtn = styled.button`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};

  background-color: ${({ theme }) => theme.colors.gray.gray300};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`


const ReceiverInputBox = styled.div`
  width: auto;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray200};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.spacing5};
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ReceiverInputBoxInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};
`

// 상품정보 시작
const ItemInfoWrapper = styled.div`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
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
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 7px;

  display: flex;
  align-items: center;
`

const ItemInfoBoxImg = styled.img`
  width: ${({ theme }) => theme.spacing.spacing16};
  height: ${({ theme }) => theme.spacing.spacing16};
  border-radius: 5px;
`

const ItemBoxTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-left: ${({ theme }) => theme.spacing.spacing3};
`

const ItemBoxTxtTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
`

const ItemBoxTxtSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray600};
`

const ItemBoxTxtPrice = styled.p`
    font-size: ${({ theme }) => theme.typography.body.body1Bold.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.body1Bold.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.body1Bold.lineHeight};
    margin-top: 4px;
`

const ItemBoxTxtPriceLabel = styled.span`
    font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.gray.gray700};
`


// 주문 버튼 시작
const OrderBtnWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing12};

  position: sticky;
  bottom: 0;
  /* left: 0; */
  
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
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  width: 55%;
  height: 93%;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing5};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray.gray00};

  display: flex;
  flex-direction: column;
`

const ModalInfoWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`

const ModalTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title1Bold.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`

const ModalInfoTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray800};
`

const ModalInfoAddBtn = styled.button`
  width: fit-content;
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};

  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  border: none;
  border-radius: 8px;
`

const ModalUnderBtnWrapper = styled.div`
  margin-top: auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
`

const ModalExitBtn = styled.button`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
  width: 25%;
  padding: ${({ theme }) => theme.spacing.spacing3} 0;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  cursor: pointer;
`

const ModalConfirmBtn = styled.button`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
  width: 75%;
  padding: ${({ theme }) => theme.spacing.spacing3} 0;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  cursor: pointer;
`

function Order() {
  const {
    selectedId,
    senderName,
    receiverName,
    receiverPhoneNum,
    itemCount,
    selectedIdTxtError,
    senderNameError,
    receiverNameError,
    receiverPhoneNumError,
    itemCountError,
    handleChangeSelectedId,
    handleChangeSenderName,
    handleChangeReceiverName,
    handleChangeReceiverPhoneNum,
    handleChangeItemCount,
    setSelectedIdTxtError,
    setSenderNameError,
    setReceiverNameError,
    setReceiverPhoneNumError,
    setItemCountError
  } = useOrderForm();
  const [selectedIdTxt, setSelectedIdTxt] = useState(orderCard.find(c => c.id === selectedId)?.defaultTextMessage);
  const [modalToggle, setModalToggle] = useState(false);


  const [searchParams] = useSearchParams();
  const brandInfo = searchParams.get('brandInfo');
  const id = searchParams.get('id');
  const imageURL = searchParams.get('imageURL');
  const name = searchParams.get('name');
  const price = parseInt(String(searchParams.get('price')));

  const navigate = useNavigate();

  // 이벤트 핸들러
  function onCardClick(id: number) {
    handleChangeSelectedId(id);
    setSelectedIdTxt(String(orderCard.find(c => c.id === selectedId)?.defaultTextMessage));
  }


  function onClickHandler() {
    let blocking = 0;

    if (selectedIdTxt === '') {
      blocking++;
      setSelectedIdTxtError(true);
    } else {
      setSelectedIdTxtError(false);
    }
    if (senderName === '') {
      blocking++;
      setSenderNameError(true);
    } else {
      setSenderNameError(false);
    }
    if (receiverName === '') {
      blocking++;
      setReceiverNameError(true)
    } else {
      setReceiverNameError(false);
    }
    if (!PHONE_NUM_REGEX.test(receiverPhoneNum)) {
      blocking++;
      setReceiverPhoneNumError(true);
    } else {
      setReceiverPhoneNumError(false);
    }
    if (itemCount < 1) {
      blocking++;
      setItemCountError(true);
    } else {
      setItemCountError(false);
    }

    if (blocking > 0) {
      return 0;
    }

    alert(`주문이 완료되었습니다.\n상품명: ${name}\n구매 수량: ${itemCount}\n발신자 이름: ${senderName}\n메시지: ${orderCard.find(c => c.id === selectedId)?.defaultTextMessage}
      `);
    navigate('/');
  }

  function handleModalOpen() {
    setModalToggle(true);
  }

  function handleModalClose() {
    setModalToggle(false);
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
        <CardViewTxt value={selectedIdTxt} onChange={(e) => { setSelectedIdTxt(e.target.value) }}>
        </CardViewTxt>
        {selectedIdTxtError && <CardViewTxtErrorTxt>메시지를 입력 해주세요.</CardViewTxtErrorTxt>}

      </CardViewWrapper>

      {/* 보내는 사람 */}
      <SenderInputWrapper>
        <SenderInputTitle>보내는 사람</SenderInputTitle>
        <SenderInput
          placeholder="이름을 입력하세요."
          onChange={((e) => handleChangeSenderName(e.target.value))}
          value={senderName}
        ></SenderInput>
        {senderNameError ? <SenderInputErrorTxt>이름을 입력해주세요.</SenderInputErrorTxt> : <SenderInputInfoTxt>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderInputInfoTxt>}

      </SenderInputWrapper>

      {/* 받는사람 */}
      <ReceiverInputWrapper>
        <ReceiverInputTitleBtnWrapper>
          <ReceiverInputTitle>받는 사람</ReceiverInputTitle>
          <ReceiverInputAddBtn onClick={handleModalOpen}>추가</ReceiverInputAddBtn>
        </ReceiverInputTitleBtnWrapper>

        <ReceiverInputBox>
          {true && <ReceiverInputBoxInfo>받는 사람이 없습니다<br></br>받는 사람을 추가해주세요.</ReceiverInputBoxInfo>}
        </ReceiverInputBox>
        {/* <ReceiverInputNameWrapper>
          <ReceiverInputNameLabel htmlFor="ReceiverInputName">
            이름
          </ReceiverInputNameLabel>
            <ReceiverInputName
              placeholder="이름을 입력하세요."
              value={receiverName}
              onChange={(e) => { handleChangeReceiverName(e.target.value) }}
            ></ReceiverInputName>
        </ReceiverInputNameWrapper>
        {receiverNameError && <ReceiverInputErrorTxt>이름을 입력해 주세요.</ReceiverInputErrorTxt>}

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
        {receiverPhoneNumError && <ReceiverInputErrorTxt>전화번호를 입력해 주세요.</ReceiverInputErrorTxt>}

        <ReceiverItemNumWrapper>
          <ReceiverItemNumInputLabel htmlFor="ReceiverInputName">
            수량
          </ReceiverItemNumInputLabel>
          <ReceiverItemNumInput
            type='number'
            min='0'
            step='1'
            placeholder='수량'
            value={itemCount}
            onChange={(e) => handleChangeItemCount(parseInt(e.target.value))}
          ></ReceiverItemNumInput>
        </ReceiverItemNumWrapper>
        {itemCountError && <ReceiverInputErrorTxt>구매 수량은 1개 이상이어야 합니다.</ReceiverInputErrorTxt>} */}
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
        <OrderButton onClick={() => onClickHandler()}>
          {price * itemCount}원 주문하기
        </OrderButton>
      </OrderBtnWrapper>

      {/* 모달 */}

      {modalToggle && <ModalOverlay>
        <ModalContent>
          <ModalInfoWrapper>
            <ModalTitle>받는 사람</ModalTitle>
            <ModalInfoTxt>* 최대 10명까지 추가 할 수 있어요.</ModalInfoTxt>
            <ModalInfoTxt>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</ModalInfoTxt>
          </ModalInfoWrapper>
          <ModalInfoAddBtn>추가하기</ModalInfoAddBtn>
          <ModalUnderBtnWrapper>
            <ModalExitBtn onClick={handleModalClose}>취소</ModalExitBtn>
            <ModalConfirmBtn>{0}명 완료</ModalConfirmBtn>
          </ModalUnderBtnWrapper>
        </ModalContent>
      </ModalOverlay>}
    </Layout>
  );
}

export default Order;
