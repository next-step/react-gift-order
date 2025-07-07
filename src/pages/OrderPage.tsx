// src/pages/OrderPage.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { NavBar } from '@/components/NavBar';
import type { GiftItem, MessageCard } from '@/types';
import { rankingAll } from '@/data/rankings';
import { messageCardTemplates } from '@/data/messageCards';
import { palette, spacing, typography } from '@/styles/theme';

// --- Styles ---
const pageWrapper = css`
  padding: ${spacing.spacing4} 0 100px 0;
`;
const cardSelector = css`
  padding: 0 ${spacing.spacing4};
  .scroll-container {
    display: flex;
    gap: ${spacing.spacing3};
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .thumb-btn {
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    transition: border-color 0.2s;
    flex-shrink: 0;
    &.active { border-color: ${palette.primary}; }
    img { width: 80px; height: 80px; display: block; }
  }
`;
const cardPreview = css`
  width: 100%;
  padding: 0 ${spacing.spacing4};
  margin-top: ${spacing.spacing4};
  aspect-ratio: 1.5 / 1;
  img { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; }
`;
const messageGroup = css`
  padding: 0 ${spacing.spacing4};
  margin-top: ${spacing.spacing4};
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid ${palette.gray300};
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    min-height: 80px;
  }
`;
const divider = css`
  height: 8px;
  background-color: ${palette.gray100};
  margin: ${spacing.spacing6} 0;
  border: none;
`;
const formSection = css`
  padding: 0 ${spacing.spacing4};
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: ${spacing.spacing4};
  }
`;
const formGroup = css`
  margin-bottom: ${spacing.spacing5};
  label {
    font-weight: bold;
    font-size: 14px;
    display: block;
    margin-bottom: ${spacing.spacing2};
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid ${palette.gray300};
    border-radius: 8px;
    font-size: 14px;
  }
  .helper-text {
    font-size: 12px;
    color: ${palette.gray600};
    margin-top: ${spacing.spacing2};
  }
`;
const errorCss = css`
  font-size: 12px;
  color: ${palette.red600};
  margin-top: 4px;
`;
const footer = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 720px;
  margin: 0 auto;
  padding: ${spacing.spacing3} ${spacing.spacing4} ${spacing.spacing5};
  background: ${palette.gray00};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;
const submitButton = css`
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${palette.black};
  background: ${palette.primary};
`;

const phoneRegex = /^010\d{8}$/;

const OrderPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const item = rankingAll.find(it => it.id === Number(itemId));

  const [selectedCard, setSelectedCard] = useState<MessageCard>(messageCardTemplates[0]);
  const [formValues, setFormValues] = useState({
    message: '',
    senderName: '내 이름',
    recipientName: '',
    recipientPhone: '',
    quantity: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedCard) {
      setFormValues(v => ({ ...v, message: selectedCard.defaultTextMessage }));
    }
  }, [selectedCard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.senderName.trim()) newErrors.senderName = '보내는 사람 이름은 필수예요.';
    if (!formValues.recipientName.trim()) newErrors.recipientName = '받는 사람 이름은 필수예요.';
    if (!formValues.recipientPhone.trim()) {
      newErrors.recipientPhone = '받는 사람 전화번호는 필수예요.';
    } else if (!phoneRegex.test(formValues.recipientPhone)) {
      newErrors.recipientPhone = '전화번호 형식이 올바르지 않아요 (01012341234).';
    }
    if (formValues.quantity < 1) newErrors.quantity = '수량은 1개 이상이어야 해요.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('주문 성공!');
      navigate('/');
    }
  };

  if (!item) {
    return (
      <Layout>
        <NavBar />
        <div css={pageWrapper}>상품 정보를 찾을 수 없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <NavBar />
      <div css={pageWrapper}>
        <div css={cardSelector}>
          <div className="scroll-container">
            {messageCardTemplates.map(card => (
              <button
                key={card.id}
                className={`thumb-btn ${selectedCard.id === card.id ? 'active' : ''}`}
                onClick={() => setSelectedCard(card)}
              >
                <img src={card.thumbUrl} alt={`card-${card.id}`} />
              </button>
            ))}
          </div>
        </div>

        <div css={cardPreview}>
          <img src={selectedCard.imageUrl} alt="Selected Card Preview" />
        </div>

        <div css={messageGroup}>
          <textarea
            name="message"
            placeholder="축하 메시지를 입력해주세요"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>

        <hr css={divider} />

        <div css={formSection}>
          <h3>보내는 사람</h3>
          <div css={formGroup}>
            <input
              type="text"
              name="senderName"
              placeholder="이름을 입력하세요."
              value={formValues.senderName}
              onChange={handleChange}
            />
            <p className="helper-text">* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</p>
            {errors.senderName && <div css={errorCss}>{errors.senderName}</div>}
          </div>
        </div>

        <hr css={divider} />

        <div css={formSection}>
          <h3>받는 사람</h3>
          <div css={formGroup}>
            <label>이름</label>
            <input type="text" name="recipientName" placeholder="이름을 입력하세요." value={formValues.recipientName} onChange={handleChange} />
            {errors.recipientName && <div css={errorCss}>{errors.recipientName}</div>}
          </div>
          <div css={formGroup}>
            <label>전화번호</label>
            <input type="tel" name="recipientPhone" placeholder="전화번호를 입력하세요." value={formValues.recipientPhone} onChange={handleChange} />
            {errors.recipientPhone && <div css={errorCss}>{errors.recipientPhone}</div>}
          </div>
          <div css={formGroup}>
            <label>수량</label>
            <input type="number" name="quantity" value={formValues.quantity} onChange={handleChange} min="1" />
            {errors.quantity && <div css={errorCss}>{errors.quantity}</div>}
          </div>
        </div>
      </div>

      <footer css={footer}>
        <button type="button" css={submitButton} onClick={handleSubmit}>
          {item.price.sellingPrice.toLocaleString()}원 주문하기
        </button>
      </footer>
    </Layout>
  );
};

export default OrderPage;