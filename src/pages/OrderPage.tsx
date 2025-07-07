/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import GlobalStyle from '@/styles/GlobalStyle';
import { useAuth } from '@/contexts/AuthContext';
import product from '@/data/product';
import orderCardsData from '@/data/orderCard';

// orderCard.ts 데이터 타입 정의
interface OrderCard {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
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

// 수량 인풋 스타일
const quantityInput = css({
  width: '100%',
  padding: `${spacing.spacing3} ${spacing.spacing4}`,
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: '8px',
  marginBottom: spacing.spacing4,
  fontSize: '16px',
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

// 페이지 컨테이너 스타일
const pageContainer = css({
  maxWidth: '720px',
  margin: '0 auto',
  padding: `0 ${spacing.spacing4}`,
});

const OrderPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams();
  
  // 가져온 orderCard.ts 데이터 사용
  const [selectedCard, setSelectedCard] = useState<OrderCard>(orderCardsData[0]);
  const [message, setMessage] = useState(orderCardsData[0].defaultTextMessage);
  
  // 로그인 체크
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/order/${productId}` } });
    }
  }, [isAuthenticated, navigate, productId]);
  
  // 카드 선택 핸들러
  const handleCardSelect = (card: OrderCard) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
  };
  
  // 주문하기 핸들러
  const handleOrder = () => {
    alert('주문이 완료되었습니다!');
    navigate('/');
  };
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <div css={pageContainer}>
        
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
        
        {/* 메시지 입력 */}
        <textarea 
          css={messageInput} 
          placeholder="상대에게 보낼 메시지를 입력하세요." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <h2 css={sectionTitle}>보내는 사람</h2>
        <div css={inputContainer}>
          <div css={inputLabel}>이름</div>
          <input css={inputField} type="text" placeholder="이름을 입력하세요." />
        </div>
        
        {/* 받는 사람 정보 */}
        <h2 css={sectionTitle}>받는 사람</h2>
        <div css={inputContainer}>
          <div css={inputLabel}>이름</div>
          <input css={inputField} type="text" placeholder="이름을 입력하세요." />
        </div>
        <div css={inputContainer}>
          <div css={inputLabel}>전화번호</div>
          <input css={inputField} type="text" placeholder="전화번호를 입력하세요." />
        </div>
        <div css={inputContainer}>
          <div css={inputLabel}>수량</div>
          <input css={quantityInput} type="number" min="1" defaultValue="1" />
        </div>
        
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
        <button css={orderButton} onClick={handleOrder}>
          {product.price.sellingPrice.toLocaleString()}원 주문하기
        </button>
      </div>
    </>
  );
};

export default OrderPage;
