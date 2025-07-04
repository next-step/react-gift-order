import React, { useState } from "react";
import { Layout } from "../Components/layout/Layout";
import styled from "@emotion/styled";
import { cardTemplates } from "../Components/cardTemplates";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const PreviewImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  margin-bottom: 16px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  max-width: 320px;
  min-height: 60px;
  font-size: 1.1rem;
  padding: 12px;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  resize: none;
  box-sizing: border-box;
  margin-bottom: 8px;
  background: #fafafa;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 0 0 24px 0;
  overflow-x: auto;
  padding: 8px 0 8px 0;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 6px;
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }
`;

const CardItem = styled.div<{ selected: boolean }>`
  flex: 0 0 auto;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${({ selected }) => selected ? '#f7e244' : 'transparent'};
  background: ${({ selected }) => selected ? '#fffbe6' : 'transparent'};
  box-shadow: ${({ selected }) => selected ? '0 2px 8px #ffe14a' : 'none'};
  transition: border 0.2s, background 0.2s, box-shadow 0.2s;
`;

const Thumb = styled.img<{ selected: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 4px;
  border: 2px solid ${({ selected }) => selected ? '#f7e244' : '#eee'};
  box-shadow: ${({ selected }) => selected ? '0 2px 8px #ffe14a' : 'none'};
  transition: border 0.2s, box-shadow 0.2s;
`;

const Message = styled.div`
  font-size: 0.95rem;
  color: #333;
  text-align: center;
`;

const OrderButton = styled.button`
  width: 100%;
  max-width: 320px;
  background: #f7e244;
  color: #222;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 18px 0;
  margin-top: 12px;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  &:hover:enabled {
    background: #ffe14a;
  }
  &:disabled {
    background: #f0f0f0;
    color: #b0b3ba;
    cursor: not-allowed;
  }
`;

const SenderSection = styled.section`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 16px 16px 16px;
  margin-bottom: 24px;
`;

const SenderTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const SenderInput = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 16px 18px;
  border: 1.5px solid #d6dbe1;
  border-radius: 16px;
  outline: none;
  margin-bottom: 8px;
  background: #fff;
  &::placeholder {
    color: #b0b3ba;
  }
`;

const SenderGuide = styled.div`
  font-size: 0.95rem;
  color: #b0b3ba;
  margin-left: 2px;
`;

const ReceiverSection = styled.section`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 16px 16px 16px;
  margin-bottom: 24px;
`;

const ReceiverTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ReceiverRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ReceiverLabel = styled.label`
  width: 80px;
  font-size: 1rem;
  font-weight: 500;
  color: #222;
`;

const ReceiverInput = styled.input`
  flex: 1;
  font-size: 1.1rem;
  padding: 14px 16px;
  border: 1.5px solid #d6dbe1;
  border-radius: 12px;
  outline: none;
  background: #fff;
  &::placeholder {
    color: #b0b3ba;
  }
`;

const ProductSection = styled.section`
  background: #fafbfc;
  border-radius: 12px;
  padding: 24px 16px 16px 16px;
  margin-bottom: 24px;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 18px;
  padding: 18px 20px;
  gap: 18px;
`;

const ProductImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  object-fit: cover;
  background: #f0f0f0;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ProductName = styled.div`
  font-size: 1.08rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 2px;
`;

const ProductBrand = styled.div`
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 2px;
`;

const ProductPrice = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
  margin-top: 4px;
`;

const Order: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));
  const [selectedId, setSelectedId] = useState<number | null>(cardTemplates[0]?.id ?? null);
  const [message, setMessage] = useState(cardTemplates[0]?.defaultTextMessage ?? "");
  const [sender, setSender] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

  const selectedCard = cardTemplates.find(card => card.id === selectedId);

  // 카드 선택 시 메시지 입력란에 기본 메시지 세팅
  const handleSelect = (id: number) => {
    setSelectedId(id);
    const card = cardTemplates.find(c => c.id === id);
    setMessage(card?.defaultTextMessage || "");
  };

  return (
    <Layout>
      <h2>카드 템플릿 선택</h2>
      <CardList>
        {cardTemplates.map(card => (
          <CardItem
            key={card.id}
            selected={selectedId === card.id}
            onClick={() => handleSelect(card.id)}
          >
            <Thumb src={card.thumbUrl} alt={card.defaultTextMessage} selected={selectedId === card.id} />
          </CardItem>
        ))}
      </CardList>
      <PreviewWrapper>
        {selectedCard && (
          <>
            <PreviewImage src={selectedCard.imageUrl} alt={selectedCard.defaultTextMessage} />
            <MessageInput
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="메시지를 입력하세요."
            />
          </>
        )}
      </PreviewWrapper>
      <SenderSection>
        <SenderTitle>보내는 사람</SenderTitle>
        <SenderInput
          type="text"
          placeholder="이름을 입력하세요."
          value={sender}
          onChange={e => setSender(e.target.value)}
        />
        <SenderGuide>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SenderGuide>
      </SenderSection>
      <ReceiverSection>
        <ReceiverTitle>받는 사람</ReceiverTitle>
        <ReceiverRow>
          <ReceiverLabel htmlFor="receiverName">이름</ReceiverLabel>
          <ReceiverInput
            id="receiverName"
            type="text"
            placeholder="이름을 입력하세요."
            value={receiverName}
            onChange={e => setReceiverName(e.target.value)}
          />
        </ReceiverRow>
        <ReceiverRow>
          <ReceiverLabel htmlFor="receiverPhone">전화번호</ReceiverLabel>
          <ReceiverInput
            id="receiverPhone"
            type="tel"
            placeholder="전화번호를 입력하세요."
            value={receiverPhone}
            onChange={e => setReceiverPhone(e.target.value)}
          />
        </ReceiverRow>
        <ReceiverRow>
          <ReceiverLabel htmlFor="quantity">수량</ReceiverLabel>
          <ReceiverInput
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </ReceiverRow>
      </ReceiverSection>
      <ProductSection>
        <ProductTitle>상품 정보</ProductTitle>
        {product ? (
          <ProductBox>
            <ProductImg src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
              <ProductPrice>상품가 <b>{product.price.toLocaleString()}원</b></ProductPrice>
            </ProductInfo>
          </ProductBox>
        ) : (
          <div>상품 정보를 불러올 수 없습니다.</div>
        )}
      </ProductSection>
      <OrderButton type="button" disabled={!message.trim()}>
        주문하기
      </OrderButton>
    </Layout>
  );
};

export default Order; 