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
  horizontalFormStyle,
  productInfoStyle,
  productImageStyle,
  orderButtonStyle,
  sectionStyle,
  receiverLabelStyle,
  helperTextStyle,
  errorInputStyle,
  errorMessageStyle,
} from './OrderPage.style';

const OrderPage = () => {
  const theme = useTheme();

  const [selectedCard, setSelectedCard] = useState(cardTemplates[0]);
  const [message, setMessage] = useState(cardTemplates[0].defaultTextMessage);
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [senderError, setSenderError] = useState('');
  const [receiverNameError, setReceiverNameError] = useState('');
  const [receiverPhoneError, setReceiverPhoneError] = useState('');

  const product = mockItems[0];

  const isValidPhoneNumber = (phone: string) =>
    /^010-\d{4}-\d{4}$/.test(phone);

  const submitOrder = () => {
    let hasError = false;

    if (!senderName.trim()) {
      setSenderError('이름을 입력해주세요.');
      hasError = true;
    }

    if (!receiverName.trim()) {
      setReceiverNameError('이름을 입력해주세요.');
      hasError = true;
    }

    if (!receiverPhone.trim()) {
      setReceiverPhoneError('전화번호를 입력해주세요.');
      hasError = true;
    } else if (!isValidPhoneNumber(receiverPhone)) {
      setReceiverPhoneError('올바른 전화번호 형식이 아닙니다.');
      hasError = true;
    }

    if (hasError) return;

    alert(
      `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${quantity}\n발신자 이름: ${senderName}\n메시지: ${message}`
    );
  };

  const handleCardSelect = (card: (typeof cardTemplates)[0]) => {
    setSelectedCard(card);
    setMessage(card.defaultTextMessage);
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
        onChange={(e) => setMessage(e.target.value)}
        css={messageInputStyle(theme)}
      />

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
        <div css={formGroupStyle(theme)}>
          <label>받는 사람</label>

          <div css={horizontalFormStyle(theme)}>
            <label css={receiverLabelStyle(theme)}>이름</label>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                value={receiverName}
                onChange={(e) => {
                  setReceiverName(e.target.value);
                  if (e.target.value.trim()) setReceiverNameError('');
                }}
                css={receiverNameError ? errorInputStyle : undefined}
              />
              {receiverNameError && (
                <p css={errorMessageStyle}>{receiverNameError}</p>
              )}
            </div>
          </div>

          <div css={horizontalFormStyle(theme)}>
            <label css={receiverLabelStyle(theme)}>전화번호</label>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="전화번호를 입력하세요."
                value={receiverPhone}
                onChange={(e) => {
                  setReceiverPhone(e.target.value);
                  if (isValidPhoneNumber(e.target.value)) {
                    setReceiverPhoneError('');
                  }
                }}
                css={receiverPhoneError ? errorInputStyle : undefined}
              />
              {receiverPhoneError && (
                <p css={errorMessageStyle}>{receiverPhoneError}</p>
              )}
            </div>
          </div>

          <div css={horizontalFormStyle(theme)}>
            <label css={receiverLabelStyle(theme)}>수량</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div css={sectionStyle(theme)}>
        <h2 css={titleStyle(theme)}>상품 정보</h2>
        <div css={productInfoStyle(theme)}>
          <img
            src={product.imageURL}
            alt="상품"
            css={productImageStyle(theme)}
          />
          <div>
            <p>
              {product.name} / {product.brand}
            </p>
            <strong>{product.price.toLocaleString()}원</strong>
          </div>
        </div>
      </div>

      <button css={orderButtonStyle(theme)} onClick={submitOrder}>
        {(product.price * quantity).toLocaleString()}원 주문하기
      </button>
    </div>
  );
};

export default OrderPage;
