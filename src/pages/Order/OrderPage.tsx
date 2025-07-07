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
  receiverAddGuideStyle,
  errorInputStyle,
  errorMessageStyle,
} from './OrderPage.style';

const AddReceiverModal = ({ onClose }: { onClose: () => void }) => {
  const theme = useTheme();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const isValidPhoneNumber = (phone: string) =>
    /^010-\d{4}-\d{4}$/.test(phone);

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        css={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          width: '680px',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 css={{ marginTop: 0 }}>받는 사람 추가</h3>
        <p css={receiverAddGuideStyle(theme)}>* 최대 10명까지 추가 할 수 있어요.</p>
        <p css={receiverAddGuideStyle(theme)}>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</p>

        {!isFormVisible && (
          <button
            type="button"
            onClick={() => setIsFormVisible(true)}
            css={{
              backgroundColor: theme.color.gray.gray200,
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '12px',
            }}
          >
            추가하기
          </button>
        )}

        {isFormVisible && (
          <div>
            <div css={horizontalFormStyle(theme)}>
              <label css={receiverLabelStyle(theme)}>이름</label>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="이름을 입력하세요."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim()) setNameError('');
                  }}
                  css={nameError ? errorInputStyle : undefined}
                />
                {nameError && <p css={errorMessageStyle}>{nameError}</p>}
              </div>
            </div>

            <div css={horizontalFormStyle(theme)}>
              <label css={receiverLabelStyle(theme)}>전화번호</label>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="전화번호를 입력하세요."
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (isValidPhoneNumber(e.target.value)) {
                      setPhoneError('');
                    }
                  }}
                  css={phoneError ? errorInputStyle : undefined}
                />
                {phoneError && <p css={errorMessageStyle}>{phoneError}</p>}
              </div>
            </div>

            <div css={horizontalFormStyle(theme)}>
              <label css={receiverLabelStyle(theme)}>수량</label>
              <div style={{ flex: 1 }}>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setQuantity(val);
                    if (val >= 1) setQuantityError('');
                  }}
                  css={quantityError ? errorInputStyle : undefined}
                />
                {quantityError && <p css={errorMessageStyle}>{quantityError}</p>}
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          css={{
            marginTop: '16px',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: 'white',
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

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
  const [messageError, setMessageError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const [isAddReceiverModalOpen, setIsAddReceiverModalOpen] = useState(false);

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

    if (!message.trim()) {
      setMessageError('메시지를 입력해주세요.');
      hasError = true;
    }

    if (quantity < 1) {
      setQuantityError('구매 수량은 1개 이상이어야 합니다.');
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
        <div css={formGroupStyle(theme)}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
            <div style={{ flex: 1 }}>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setQuantity(val);
                  if (val >= 1) setQuantityError('');
                }}
                css={quantityError ? errorInputStyle : undefined}
              />
              {quantityError && <p css={errorMessageStyle}>{quantityError}</p>}
            </div>
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

      {isAddReceiverModalOpen && (
        <AddReceiverModal onClose={() => setIsAddReceiverModalOpen(false)} />
      )}
    </div>
  );
};

export default OrderPage;
