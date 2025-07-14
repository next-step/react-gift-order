import styled from '@emotion/styled';
import RecipientCard from './RecipientCard';
import { calculateTotalQuantity, formatRecipientsSummary } from '@/utils';
import type { Recipient } from '@/types';

interface RecipientListProps {
  recipients: Recipient[];
  onRemoveRecipient: (index: number) => void;
  onAddRecipient: () => void;
  canAddMore?: boolean;
  maxReached?: boolean;
  isLoading?: boolean;
}

const Container = styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #111827;
`;

const AddButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? '#f3f4f6' : '#fee500')};
  color: ${(props) => (props.disabled ? '#9ca3af' : '#1f2937')};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover:not(:disabled) {
    background: #fde047;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const RecipientGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyState = styled.div`
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 32px 16px;
  text-align: center;
  color: #6b7280;
`;

const EmptyStateTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #374151;
`;

const EmptyStateDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const SummaryInfo = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryText = styled.div`
  font-size: 14px;
  color: #475569;
`;

const SummaryValue = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #1e293b;
`;

const MaxReachedText = styled.div`
  color: #dc2626;
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
`;

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

const RecipientList = ({
  recipients,
  onRemoveRecipient,
  onAddRecipient,
  canAddMore = true,
  maxReached = false,
  isLoading = false,
}: RecipientListProps) => {
  const totalQuantity = calculateTotalQuantity(recipients);
  const summary = formatRecipientsSummary(recipients);

  const handleAddClick = () => {
    if (canAddMore && !isLoading) {
      onAddRecipient();
    }
  };

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>받는 사람</SectionTitle>
        <div>
          <AddButton
            onClick={handleAddClick}
            disabled={!canAddMore || isLoading}
            title={
              maxReached ? '최대 10명까지 등록 가능합니다' : '받는사람 추가'
            }
          >
            <PlusIcon />
            추가
          </AddButton>
          {maxReached && (
            <MaxReachedText>최대 10명까지 등록 가능</MaxReachedText>
          )}
        </div>
      </SectionHeader>

      {recipients.length === 0 ? (
        <EmptyState>
          <EmptyStateTitle>받는사람을 추가해주세요</EmptyStateTitle>
          <EmptyStateDescription>
            받는사람을 최소 1명 이상 등록해야 주문이 가능합니다.
            <br />
            최대 10명까지 등록할 수 있습니다.
          </EmptyStateDescription>
        </EmptyState>
      ) : (
        <>
          <RecipientGrid>
            {recipients.map((recipient, index) => (
              <RecipientCard
                key={`${recipient.id}-${index}`}
                recipient={recipient}
                index={index}
                onRemove={onRemoveRecipient}
                showRemoveButton={recipients.length > 0}
              />
            ))}
          </RecipientGrid>

          <SummaryInfo>
            <SummaryText>{summary}</SummaryText>
            <SummaryValue>총 {totalQuantity}개</SummaryValue>
          </SummaryInfo>
        </>
      )}
    </Container>
  );
};

export default RecipientList;
