import React, { useState } from "react";
import { Layout } from "../Components/layout/Layout";
import styled from "@emotion/styled";
import { cardTemplates } from "../Components/cardTemplates";

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

const Order: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [message, setMessage] = useState("");

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
      <OrderButton type="button" disabled={!message.trim()}>
        주문하기
      </OrderButton>
    </Layout>
  );
};

export default Order; 