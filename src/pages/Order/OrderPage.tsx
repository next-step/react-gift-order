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
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(cardTemplates[0].defaultTextMessage);
  const [senderName, setSenderName] = useState('');

  const [receivers, setReceivers] = useState<
    { name: string; phone: string; quantity: number }[]
  >([]);

  const [senderError, setSenderError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [isAddReceiverModalOpen, setIsAddReceiverModalOpen] = useState(false);

  const product = mockItems[0];

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
    navigate('/');
  };

  const handleCardSelect = (card: (typeof cardTemplates)[0]) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
    setMessageError('');
  };

  return (
    <div css={containerStyle(theme)}>
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
            {receivers.length === 0 ? '+ 추가' : '수정'}
          </button>
        </div>

        {receivers.length === 0 ? (
          <p css={helperTextStyle(theme)}>
            받는 사람이 없습니다. 받는 사람을 추가해주세요.
          </p>
        ) : (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: theme.color.gray.gray100,
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: theme.color.gray.gray300,
                  textAlign: 'left',
                }}
              >
                <th style={{ padding: '8px 12px' }}>이름</th>
                <th style={{ padding: '8px 12px' }}>전화번호</th>
                <th style={{ padding: '8px 12px' }}>수량</th>
              </tr>
            </thead>
            <tbody>
              {receivers.map((r, i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: `1px solid ${theme.color.gray.gray100}`,
                  }}
                >
                  <td style={{ padding: '8px 12px' }}>{r.name}</td>
                  <td style={{ padding: '8px 12px' }}>{r.phone}</td>
                  <td style={{ padding: '8px 12px' }}>{r.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

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

      {isAddReceiverModalOpen && (
        <AddReceiverModal
          onClose={() => setIsAddReceiverModalOpen(false)}
          onComplete={(newReceivers) => {
            setReceivers(newReceivers);
            setIsAddReceiverModalOpen(false);
          }}
          initialReceivers={receivers}
        />
      )}
    </div>
  );
};

export default OrderPage;
