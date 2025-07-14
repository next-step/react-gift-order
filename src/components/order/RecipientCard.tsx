import styled from '@emotion/styled';
import type { Recipient } from '@/types';

interface RecipientCardProps {
  recipient: Recipient;
  index: number;
  onRemove: (index: number) => void;
  showRemoveButton?: boolean;
}

const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 8px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-color: #d1d5db;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const RecipientNumber = styled.div`
  background: #f3f4f6;
  color: #6b7280;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  line-height: 1;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:hover {
    background: #fee2e2;
    color: #dc2626;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const RecipientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoLabel = styled.span`
  color: #6b7280;
  font-size: 13px;
  font-weight: 500;
  min-width: 32px;
`;

const InfoValue = styled.span`
  color: #111827;
  font-size: 14px;
  font-weight: 500;
  flex: 1;
`;

const QuantityBadge = styled.span`
  background: #fee500;
  color: #1f2937;
  font-size: 13px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 8px;
  line-height: 1.4;
`;

const RecipientCard = ({
  recipient,
  index,
  onRemove,
  showRemoveButton = true,
}: RecipientCardProps) => {
  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <CardContainer>
      <CardHeader>
        <RecipientNumber>받는사람 {index + 1}</RecipientNumber>
        {showRemoveButton && (
          <RemoveButton onClick={handleRemove} title="받는사람 삭제">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </RemoveButton>
        )}
      </CardHeader>

      <RecipientInfo>
        <InfoRow>
          <InfoLabel>이름</InfoLabel>
          <InfoValue>{recipient.name}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>연락처</InfoLabel>
          <InfoValue>{recipient.phone}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>수량</InfoLabel>
          <InfoValue>
            <QuantityBadge>{recipient.quantity}개</QuantityBadge>
          </InfoValue>
        </InfoRow>
      </RecipientInfo>
    </CardContainer>
  );
};

export default RecipientCard;
