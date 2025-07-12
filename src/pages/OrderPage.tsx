import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import GlobalStyle from '@/styles/GlobalStyle';
import { useAuth } from '@/contexts/AuthContext';
import product from '@/data/product';
import orderCardsData from '@/data/orderCard';
import ReceiverModal from './ReceiverModal';

// orderCard.ts 데이터 타입 정의
interface OrderCard {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}


// 받는 사람 타입 정의
interface Receiver {
  receiverName: string;
  phoneNumber: string;
  quantity: number;
}
// 카드 컨테이너 스타일
const cardScrollContainer = css({
  display: 'flex',
  overflowX: 'auto',
  gap: spacing.spacing2,
  padding: `${spacing.spacing4} 0`,
  '&::-webkit-scrollbar': {
    height: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: colors.gray300,
    borderRadius: '10px',
  },
});

// 카드 썸네일 스타일
const cardThumb = (isSelected: boolean) => css({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  cursor: 'pointer',
  border: isSelected ? `2px solid ${colors.kakaoYellow}` : 'none',
  boxShadow: isSelected ? `0 0 0 2px ${colors.kakaoYellow}` : 'none',
  flexShrink: 0,
});

// 선택된 카드 이미지 스타일
const selectedCardContainer = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: spacing.spacing6,
});

const selectedCardImage = css({
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  borderRadius: '16px',
});

// 메시지 입력 영역 스타일
const messageInput = css({
  width: '100%',
  minHeight: '100px',
  padding: spacing.spacing4,
  borderRadius: '8px',
  border: `1px solid ${colors.borderDefault}`,
  resize: 'none',
  marginBottom: spacing.spacing6,
  fontSize: '16px',
  fontFamily: 'inherit',
});

// 섹션 제목 스타일
const sectionTitle = css({
  margin: `${spacing.spacing4} 0`,
  ...typography.body1Bold,
});

// 인풋 필드 스타일
const inputField = css({
  width: '100%',
  padding: `${spacing.spacing3} ${spacing.spacing4}`,
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: '8px',
  marginBottom: spacing.spacing4,
  fontSize: '16px',
});

// 인풋 레이블 스타일
const inputLabel = css({
  width: '70px',
  ...typography.body2Regular,
  color: colors.textSub,
});

// 인풋 컨테이너 스타일
const inputContainer = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: spacing.spacing3,
});
// 주문 정보 컨테이너 스타일
const orderInfoContainer = css({
  padding: spacing.spacing4,
  borderRadius: '8px',
  border: `1px solid ${colors.borderDefault}`,
  marginBottom: spacing.spacing6,
  display: 'flex',
  alignItems: 'center',
});

// 주문 정보 이미지 스타일
const orderInfoImage = css({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  marginRight: spacing.spacing4,
  objectFit: 'cover',
});

// 주문 정보 텍스트 스타일
const orderInfoText = css({
  flex: 1,
});

// 주문 버튼 스타일
const orderButton = css({
  width: '100%',
  padding: spacing.spacing4,
  backgroundColor: colors.kakaoYellow,
  color: colors.gray900,
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginBottom: spacing.spacing6,
});

// 오류 메시지 스타일
const errorMessage = css({
  color: colors.critical,
  fontSize: '12px',
  marginTop: '-8px',
  marginBottom: spacing.spacing3,
  marginLeft: '70px',
});


// 받는 사람 영역 스타일
const receiverSectionHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing.spacing3,
});
const receiverAddButton = css({
  padding: `${spacing.spacing2} ${spacing.spacing4}`,
  background: colors.gray100,
  border: 'none',
  borderRadius: '8px',
  color: colors.gray700,
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '14px',
});
const receiverEmptyBox = css({
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: '8px',
  padding: spacing.spacing6,
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.gray400,
  fontSize: '15px',
  marginBottom: spacing.spacing4,
  background: colors.gray100,
});

// 받는 사람 테이블 wrapper 스타일
const receiverTableWrapper = css({
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: 8,
  background: colors.gray100,
  padding: 16,
  marginBottom: 24,
});
const receiverTable = css({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
});
const receiverTableHeadRow = css({
  background: colors.gray100,
  color: colors.gray700,
  fontWeight: 700,
});
const receiverTableTh = css({
  padding: '12px 8px',
  textAlign: 'left',
});
const receiverTableTr = css({
  background: '#fff',
  borderRadius: 8,
});
const receiverTableTd = (isFirst: boolean) => css({
  padding: '12px 8px',
  borderTop: isFirst ? 'none' : `1px solid ${colors.borderDefault}`,
});



const OrderPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams();


  // react-hook-form 적용
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      message: orderCardsData[0].defaultTextMessage,
      senderName: '',
    },
  });

  
  // 가져온 orderCard.ts 데이터 사용
  const [selectedCard, setSelectedCard] = useState<OrderCard>(orderCardsData[0]);
  

  // 모달 열기/닫기 상태
  const [receiverModalOpen, setReceiverModalOpen] = useState(false);

  // 받는 사람 리스트 상태 추가
  const [receivers, setReceivers] = useState<Receiver[]>([]);

  // 카드 선택 핸들러
  const handleCardSelect = (card: OrderCard) => {
    setSelectedCard(card);
  };
  
  // 주문하기 핸들러 (react-hook-form)
  const onSubmit = (data: { message: string; senderName: string }) => {
    alert(`\n주문 정보:\n- 상품명: ${product.name}\n- 발신자: ${data.senderName}\n- 메시지: ${data.message}\n- 받는 사람 수: ${receivers.length}\n\n주문이 완료되었습니다!`);
    navigate('/');
  };
  

  // 로그인 체크
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/order/${productId}` } });
    }
  }, [isAuthenticated, navigate, productId]);
  

  // 받는 사람 전체 수량 합계 계산
  const totalQuantity = receivers.reduce((sum, r) => sum + (r.quantity || 0), 0);
  const totalPrice = product.price.sellingPrice * (totalQuantity || 1);
  
  return (
    <>
      <GlobalStyle />
      <Header />

      <div>
        {/* 카드 선택 영역 */}
        <div>
          <div css={cardScrollContainer}>
            {orderCardsData.map((card: OrderCard) => (
              <img 
                key={card.id} 
                src={card.thumbUrl} 
                alt="선물 카드" 
                css={cardThumb(selectedCard?.id === card.id)}
                onClick={() => handleCardSelect(card)}
              />
            ))}
          </div>
        </div>
        
        {/* 선택된 카드 표시 */}
        {selectedCard && (
          <div css={selectedCardContainer}>
            <img 
              src={selectedCard.imageUrl} 
              alt="선택된 카드" 
              css={selectedCardImage} 
            />
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 메시지 입력 */}
          <textarea
            css={messageInput}
            placeholder="상대에게 보낼 메시지를 입력하세요."
            {...register('message', { required: '메시지는 반드시 입력되어야해요' })}
          />
          {errors.message && <div css={errorMessage}>{errors.message.message}</div>}

          <h2 css={sectionTitle}>보내는 사람</h2>
          <div css={inputContainer}>
            <div css={inputLabel}>이름</div>
            <input
              css={inputField}
              type="text"
              placeholder="이름을 입력하세요."
              {...register('senderName', { required: '보내는 사람 이름이 반드시 입력되어야해요' })}
            />
          </div>
          {errors.senderName && <div css={errorMessage}>{errors.senderName.message}</div>}
          
          {/* 받는 사람 정보 */}
          <div css={receiverSectionHeader}>
            <span css={sectionTitle}>받는 사람</span>
            <button
              css={receiverAddButton}
              type="button"
              onClick={() => setReceiverModalOpen(true)}
            >
              수정
            </button>
          </div>
          {receivers.length === 0 ? (
            <div css={receiverEmptyBox}>
              받는 사람이 없습니다.<br />받는 사람을 추가해주세요.
            </div>
          ) : (
            <div css={receiverTableWrapper}>
              <table css={receiverTable}>
                <thead>
                  <tr css={receiverTableHeadRow}>
                    <th css={receiverTableTh}>이름</th>
                    <th css={receiverTableTh}>전화번호</th>
                    <th css={receiverTableTh}>수량</th>
                  </tr>
                </thead>
                <tbody>
                  {receivers.map((r, i) => (
                    <tr key={i} css={receiverTableTr}>
                      <td css={receiverTableTd(i === 0)}>{r.receiverName}</td>
                      <td css={receiverTableTd(i === 0)}>{r.phoneNumber}</td>
                      <td css={receiverTableTd(i === 0)}>{r.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* 상품 정보 */}
          <h2 css={sectionTitle}>상품 정보</h2>
          <div css={orderInfoContainer}>
            <img 
              src={product.imageURL} 
              alt={product.name} 
              css={orderInfoImage}
            />
            <div css={orderInfoText}>
              <div css={css({ ...typography.body2Bold })}>BBQ</div>
              <div css={css({ ...typography.body1Regular })}>{product.name}</div>
              <div css={css({ ...typography.body2Bold })}>{product.price.sellingPrice.toLocaleString()}원</div>
            </div>
          </div>
          
          {/* 주문하기 버튼 */}
          <button css={orderButton} type="submit">
            {totalPrice.toLocaleString()}원 주문하기
          </button>
        </form>

        {/* 받는 사람(Receiver) 입력/수정 모달 */}
        {receiverModalOpen && (
          <ReceiverModal
            receivers={receivers}
            setReceivers={setReceivers}
            onClose={() => setReceiverModalOpen(false)}
          />
        )}

      </div>
    </>
  );
};

export default OrderPage;
