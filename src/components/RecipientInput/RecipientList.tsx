import styled from '@emotion/styled';
import { type RecipientData } from '../../schemas/orderSchema';

const ListContainer = styled.div`
  margin-bottom: 20px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ListTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const AddButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #357abd;
  }
`;

const RecipientTable = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px 80px;
  gap: 16px;
  padding: 12px 16px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px 80px;
  gap: 16px;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const CellContent = styled.div`
  font-size: 14px;
  color: #333;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 14px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

interface RecipientListProps {
  recipients: RecipientData[];
  onAdd: () => void;
  onEdit: () => void;
}

export function RecipientList({ recipients, onAdd }: RecipientListProps) {
  const validRecipients = recipients.filter((r) => r.name && r.phone);

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>받는 사람</ListTitle>
        <AddButton type="button" onClick={recipients.length === 0 ? onAdd : onAdd}>
          {recipients.length === 0 ? '추가' : '수정'}
        </AddButton>
      </ListHeader>

      {validRecipients.length === 0 ? (
        <EmptyState>받는 사람을 입력하세요.</EmptyState>
      ) : (
        <RecipientTable>
          <TableHeader>
            <div>이름</div>
            <div>전화번호</div>
            <div>수량</div>
            <div></div>
          </TableHeader>

          {validRecipients.map((recipient, index) => (
            <TableRow key={index}>
              <CellContent>{recipient.name}</CellContent>
              <CellContent>{recipient.phone}</CellContent>
              <CellContent>{recipient.quantity}</CellContent>
            </TableRow>
          ))}
        </RecipientTable>
      )}
    </ListContainer>
  );
}
