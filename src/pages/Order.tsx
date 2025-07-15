import orderCard from '@/mocks/order_card.mock';
import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PHONE_NUM_REGEX } from '@/utils/regex';
import { useState, useMemo } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';

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

// 받는 사람 시작
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

const ReceiverInputBoxFields = styled.div`
  display: flex;
  flex-direction: column;
`
const ReceiverInputBoxField = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray700};
`

const ReceiverInputBoxFieldItem = styled.p`
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray700};

  padding: 0 4px;
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

  overflow-y: auto;
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
// 모달 리시버 box 시작
const ModalReceiverInputBox = styled.div`
    padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
    padding-bottom: ${({ theme }) => theme.spacing.spacing4};
    border-bottom: ${({ theme }) => theme.spacing.spacing1} solid ${({ theme }) => theme.colors.gray.gray200}; 
`

const ModalReceiverInputTitleBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ModalReceiverInputTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle.subtitle2Bold.lineHeight};
  margin-bottom: 10px;

`

const ModalReceiverInputDelBtn = styled.button`
  border: none;
  background: none;
`

// 이름 입력 폼
const ReceiverInputNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const ReceiverInputNameLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;

const ReceiverInputName = styled.input`
  width: 85%;
  height: ${({ theme }) => theme.spacing.spacing8};
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

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
`;

// 전화번호  입력 폼
const ReceiverInputPhoneNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const ReceiverInputPhoneNumberLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;

const ReceiverInputPhoneNumber = styled.input`
  width:85%;
  height: ${({ theme }) => theme.spacing.spacing9};
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

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
`;

// 아이템 갯수 폼
const ReceiverItemNumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const ReceiverItemNumInputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray900};
`;

const ReceiverItemNumInput = styled.input`
  width:85%;
  height: ${({ theme }) => theme.spacing.spacing9};
  padding: ${({ theme }) => theme.spacing.spacing1} ${({ theme }) => theme.spacing.spacing3};

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
`;

// 리시버 인풋 에러 텍스트
const ReceiverInputErrorTxt = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label2Regular.lineHeight};
  padding-left: 80px;
  color: ${({ theme }) => theme.colors.red.red700};
  width: 95%;
 `


// 모달 취소하기 컨펌 버튼들
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
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(false); // 모달의 상태를 나타내는 state

  type Receiver = {
    name: string;
    phone: string;
    count: number;
  };
  // 이 receiver객체들의 count를 다 합쳐서 쓸까?

  type OrderFormValues = {
    selectedId: number;
    message: string;
    senderName: string;
    receivers: Receiver[];
    allPrice: number;
  };

  const DEFAULT_CARD_ID = 904;
  const defaultMessage = useMemo(() => {
    return orderCard.find((c) => c.id === DEFAULT_CARD_ID)?.defaultTextMessage || '';
  }, []);
  // register는 필드를 useForm에 등록할때 사용
  // control은 useFieldArray 랑 연결할때 
  // handleSubmit은 폼 제출 처리할때(최종 전송할때 감싸서 사용
  // erros는 formState안에 있는 객체로 각 필드들의 에러 상태를 가지고있음
  // watch는 특정 필드의 현재 값을 구독해서 상태를 실시간으로 확인 가능
  // setValue 특정 필드의 값을 설정할때 사용
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm<OrderFormValues>({
    defaultValues: {
      selectedId: DEFAULT_CARD_ID,
      message: defaultMessage,
      senderName: '',
      receivers: [],
      allPrice: 0,
    },
  });

  // useForm에서 가져온 control객체를 넘겨야 리액트 훅 폼과 연결됨
  // useForm의 defaultValues에 선언한 필드 이름과 맞춰줌
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'receivers'
  });

  // 이전 페이지에서 상품정보 받아오는 코드
  const [searchParams] = useSearchParams();
  const brandInfo = searchParams.get('brandInfo');
  // const id = searchParams.get('id');
  const imageURL = searchParams.get('imageURL');
  const name = searchParams.get('name');
  const price = parseInt(String(searchParams.get('price')));

  // 슬라이드 카드에서 카드 선택하면 실행되는 이벤트 핸들러
  function handleCardClick(id: number) {
    setValue('selectedId', id);
    const selectedCard = orderCard.find((c) => c.id === id);
    if (selectedCard) {
      setValue('message', selectedCard?.defaultTextMessage);
      clearErrors('message');
    }
  }

  // 모달 오픈 핸들러
  function handleModalOpen() {
    setModalToggle(true);
  }

  // 최종 주문 핸들러
  function handleOrderClick() {
    const receivers = watch('receivers');
    const totalCount = receivers.reduce((sum, receivers) => sum + Number(receivers.count || 0), 0);
    alert(`주문이 완료되었습니다.\n상품명: ${name}\n구매 수량: ${totalCount}\n발신자 이름: ${watch('senderName')}\n메시지: ${watch('message')}
      `);
    navigate('/');
  }

  // 모달안에 아이템들 추가하는 핸들러
  function handleReceiverAdd() {
    if (fields.length < 10) {
      append({ name: '', phone: '', count: 1 });
    }
  }

  // 모달안에 아이템들 지우는 핸들러
  function handleReceiverDel(index: number) {
    if (fields.length > 0) {
      remove(index);
    }
  }

  // 모달 닫는 핸들러
  function handleModalClose() {
    setModalToggle(false);
  }

  // 모달안에 컨펌하는 핸들러
  function handleConfirm() {
    // 이때 전체 금액도 계산되어야함
    const receivers = watch('receivers');
    const totalCount = receivers.reduce((sum, receivers) => sum + Number(receivers.count || 0), 0);

    setValue('allPrice', totalCount * price);
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
            onClick={() => handleCardClick(item.id)}
            isActive={watch('selectedId') === item.id}
          ></SlidingCard>
        ))}
      </SlidingCardSelectorWrapper>
      {/* 카드뷰  */}
      <CardViewWrapper>
        <CardViewImg src={orderCard.find(c => c.id === watch('selectedId'))?.imageUrl} alt={orderCard.find(c => c.id === watch('selectedId'))?.defaultTextMessage}></CardViewImg>
        <CardViewTxt
          {...register('message', { required: true })}
        >
        </CardViewTxt>
        {errors.message && <CardViewTxtErrorTxt>메시지를 입력 해주세요.</CardViewTxtErrorTxt>}

      </CardViewWrapper>

      {/* 보내는 사람 */}
      <SenderInputWrapper>
        <SenderInputTitle>보내는 사람</SenderInputTitle>
        <SenderInput
          placeholder="이름을 입력하세요."
          {...register('senderName', { required: true })}
        ></SenderInput>
        {errors.senderName ? <SenderInputErrorTxt>이름을 입력해주세요.</SenderInputErrorTxt> : <SenderInputInfoTxt>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderInputInfoTxt>}
      </SenderInputWrapper>

      {/* 받는사람 */}
      <ReceiverInputWrapper>
        <ReceiverInputTitleBtnWrapper>
          <ReceiverInputTitle>받는 사람</ReceiverInputTitle>
          <ReceiverInputAddBtn onClick={handleModalOpen}>{fields.length === 0 ? '추가' : '수정'}</ReceiverInputAddBtn>
        </ReceiverInputTitleBtnWrapper>
        <ReceiverInputBox>
          {fields.length === 0 ? (
            <ReceiverInputBoxInfo>
              받는 사람이 없습니다<br />
              받는 사람을 추가해주세요.
            </ReceiverInputBoxInfo>
          ) : (
            <ReceiverInputBoxFields>
              {fields.map((field, index) => (
                <ReceiverInputBoxField key={field.id}>
                  <ReceiverInputBoxFieldItem>
                    {watch(`receivers.${index}.name`)}
                  </ReceiverInputBoxFieldItem>
                  <ReceiverInputBoxFieldItem>
                    {watch(`receivers.${index}.phone`)}
                  </ReceiverInputBoxFieldItem>
                  <ReceiverInputBoxFieldItem>
                    {watch(`receivers.${index}.count`)}
                  </ReceiverInputBoxFieldItem>
                </ReceiverInputBoxField>
              ))}
            </ReceiverInputBoxFields>
          )}
        </ReceiverInputBox>
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
        <OrderButton onClick={handleSubmit(handleOrderClick)}>
          {watch('allPrice')}원 주문하기
        </OrderButton>
      </OrderBtnWrapper>

      {/* --------------모달-------------- */}
      {modalToggle && <ModalOverlay>
        <ModalContent>
          <ModalInfoWrapper>
            <ModalTitle>받는 사람</ModalTitle>
            <ModalInfoTxt>* 최대 10명까지 추가 할 수 있어요.</ModalInfoTxt>
            <ModalInfoTxt>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</ModalInfoTxt>
          </ModalInfoWrapper>
          <ModalInfoAddBtn onClick={handleReceiverAdd} disabled={fields.length >= 10}>추가하기</ModalInfoAddBtn>

          {/* 모달 리시버 박스들 */}
          {fields.map((field, index) => (
            <ModalReceiverInputBox key={field.id}>
              <ModalReceiverInputTitleBtnWrapper>
                <ModalReceiverInputTitle>받는 사람 {index + 1}</ModalReceiverInputTitle>
                <ModalReceiverInputDelBtn onClick={() => handleReceiverDel(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </ModalReceiverInputDelBtn>
              </ModalReceiverInputTitleBtnWrapper>

              <ReceiverInputNameWrapper>
                <ReceiverInputNameLabel htmlFor={`receivers.${index}.name`}>이름</ReceiverInputNameLabel>
                <ReceiverInputName
                  placeholder="이름을 입력하세요."
                  {...register(`receivers.${index}.name`, { required: true })}
                />
              </ReceiverInputNameWrapper>
              {errors.receivers?.[index]?.name && <ReceiverInputErrorTxt>이름을 입력해 주세요.</ReceiverInputErrorTxt>}

              <ReceiverInputPhoneNumberWrapper>
                <ReceiverInputPhoneNumberLabel htmlFor={`receivers.${index}.phone`}>전화번호</ReceiverInputPhoneNumberLabel>
                <ReceiverInputPhoneNumber
                  placeholder="전화번호를 입력하세요"
                  {...register(`receivers.${index}.phone`, {
                    required: '전화번호를 입력해 주세요.',
                    pattern: {
                      value: PHONE_NUM_REGEX,
                      message: '전화번호 형식이 맞지 않습니다.'
                    },
                    validate: (value) => {
                      const phones = watch('receivers').map((r) => r.phone);
                      const occurrences = phones.filter((p) => p === value).length;
                      if (occurrences > 1) {
                        return '이미 등록된 전화번호입니다.';
                      }

                      return true;
                    },
                  })}

                />
              </ReceiverInputPhoneNumberWrapper>
              {errors.receivers?.[index]?.phone?.message && (<ReceiverInputErrorTxt>{errors.receivers[index].phone?.message}</ReceiverInputErrorTxt>)}

              <ReceiverItemNumWrapper>
                <ReceiverItemNumInputLabel htmlFor={`receivers.${index}.count`}>수량</ReceiverItemNumInputLabel>
                <ReceiverItemNumInput
                  type='number'
                  min='0'
                  step='1'
                  {...register(`receivers.${index}.count`, {
                    required: true,
                    min: 1,
                  })}

                />
              </ReceiverItemNumWrapper>
              {errors.receivers?.[index]?.count && <ReceiverInputErrorTxt>구매 수량은 1개 이상이어야 합니다.</ReceiverInputErrorTxt>}
            </ModalReceiverInputBox>
          ))}

          {/* 모달 취소하기 컨펌하기 버튼 */}
          <ModalUnderBtnWrapper>
            <ModalExitBtn onClick={handleModalClose}>취소</ModalExitBtn>
            <ModalConfirmBtn onClick={handleSubmit(handleConfirm)}>{fields.length}명 완료</ModalConfirmBtn>
          </ModalUnderBtnWrapper>
        </ModalContent>
      </ModalOverlay>}
    </Layout>
  );
}

export default Order;



