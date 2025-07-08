/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { mockItems } from '../../data/mockItems';
import { cardTemplates } from '../../data/cardTemplates';
import {
  containerStyle,
  cardSelectorStyle,
  thumbListStyle,
  thumbStyle,
  selectedThumbStyle,
  selectedImageStyle,
  messageInputStyle,
  titleStyle,
  formGroupStyle,
  productInfoStyle,
  productImageStyle,
  orderButtonStyle,
  sectionStyle,
  helperTextStyle,
  errorInputStyle,
  errorMessageStyle,
} from './OrderPage.style';
import AddReceiverModal from './components/AddReceiverModal';

const OrderPage = () => {
  const theme = useTheme();

  const [selectedCard, setSelectedCard] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(cardTemplates[0].defaultTextMessage);
  const [senderName, setSenderName] = useState('');

  // 받는 사람 목록 상태 (초기값 빈 배열)
  const [receivers, setReceivers] = useState<
    { name: string; phone: string; quantity: number }[]
  >([]);

  // 에러 상태
  const [senderError, setSenderError] = useState('');
  const [messageError, setMessageError] = useState('');

  // 모달 오픈 상태
  const [isAddReceiverModalOpen, setIsAddReceiverModalOpen] = useState(false);

  const product = mockItems[0];

  // 총 수량 계산 함수 (받는 사람 각각의 수량 합산)
  const totalQuantity = receivers.reduce((sum, r) => sum + r.quantity, 0);

  const submitOrder = () => {
    let hasError = false;

    if (!senderName.trim()) {
      setSenderError('이름을 입력해주세요.');
      hasError = true;
    } else {
      setSenderError('');
    }

    if (!message.trim()) {
      setMessageError('메시지를 입력해주세요.');
      hasError = true;
    } else {
      setMessageError('');
    }

    if (receivers.length === 0) {
      alert('받는 사람을 최소 1명 이상 추가해주세요.');
      hasError = true;
    }

    if (totalQuantity < 1) {
      alert('수량 합계가 1개 이상이어야 합니다.');
      hasError = true;
    }

    if (hasError) return;

    alert(
      `주문이 완료되었습니다.\n상품명: ${product.name}\n총 구매 수량: ${totalQuantity}\n발신자 이름: ${senderName}\n메시지: ${message}\n받는 사람 수: ${receivers.length}`
    );
  };

  const handleCardSelect = (card: (typeof cardTemplates)[0]) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
    setMessageError('');
  };

  return (
    <div css={containerStyle(theme)}>
      {/* 카드 선택 */}
      <div css={cardSelectorStyle(theme)}>
        <div css={thumbListStyle(theme)}>
          {cardTemplates.map((card) => (
            <img
              key={card.id}
              src={card.thumbUrl}
              alt="thumb"
              css={[
                thumbStyle(theme),
                card.id === selectedCard.id && selectedThumbStyle(theme),
              ]}
              onClick={() => handleCardSelect(card)}
            />
          ))}
        </div>
        <img
          src={selectedCard.imageUrl}
          alt="selected"
          css={selectedImageStyle(theme)}
        />
      </div>

      {/* 메시지 입력 */}
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          if (e.target.value.trim()) setMessageError('');
        }}
        placeholder={message.trim() === '' ? '메시지를 입력해주세요.' : ''}
        css={[messageInputStyle(theme), messageError && errorInputStyle]}
      />
      {messageError && <p css={errorMessageStyle}>{messageError}</p>}

      {/* 보내는 사람 */}
      <div css={sectionStyle(theme)}>
        <div css={formGroupStyle(theme)}>
          <label>보내는 사람</label>
          <div>
            <input
              type="text"
              placeholder="이름을 입력하세요."
              value={senderName}
              onChange={(e) => {
                setSenderName(e.target.value);
                if (e.target.value.trim()) setSenderError('');
              }}
              css={senderError ? errorInputStyle : undefined}
            />
            {senderError && <p css={errorMessageStyle}>{senderError}</p>}
          </div>
          <p css={helperTextStyle(theme)}>
            * 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.
          </p>
        </div>
      </div>

      {/* 받는 사람 */}
      <div css={sectionStyle(theme)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <label>받는 사람</label>
          <button
            type="button"
            onClick={() => setIsAddReceiverModalOpen(true)}
            style={{
              background: theme.color.gray.gray300,
              color: theme.color.gray.gray1000,
              padding: '6px 12px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            + 추가
          </button>
        </div>

        {/* 받는 사람 리스트 표시 */}
        {receivers.length === 0 ? (
          <p css={helperTextStyle(theme)}>받는 사람이 없습니다. 받는 사람을 추가해주세요.</p>
        ) : (
          <ul>
            {receivers.map((r, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                {r.name} / {r.phone} / {r.quantity}개
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 상품 정보 */}
      <div css={sectionStyle(theme)}>
        <h2 css={titleStyle(theme)}>상품 정보</h2>
        <div css={productInfoStyle(theme)}>
          <img src={product.imageURL} alt="상품" css={productImageStyle(theme)} />
          <div>
            <p>
              {product.name} / {product.brand}
            </p>
            <strong>{product.price.toLocaleString()}원</strong>
          </div>
        </div>
      </div>

      <button css={orderButtonStyle(theme)} onClick={submitOrder}>
        {(product.price * totalQuantity).toLocaleString()}원 주문하기
      </button>

      {/* 모달 */}
      {isAddReceiverModalOpen && (
        <AddReceiverModal
          onClose={() => setIsAddReceiverModalOpen(false)}
          onComplete={(newReceivers) => {
            setReceivers(newReceivers); // 모달에서 받은 목록을 상태로 저장
            setIsAddReceiverModalOpen(false);
          }}
          initialReceivers={receivers}
        />
      )}
    </div>
  );
};

export default OrderPage;
