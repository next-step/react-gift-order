import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { TABLE_HEADERS, UNIT } from '@/constants/receiverLabels';
import type { Receiver } from '@/types/receiver';

const ReceiverTable = () => {
  const { watch } = useFormContext<{ receivers: Receiver[] }>();
  const receiverList = watch('receivers');

  if (!receiverList || receiverList.length === 0) return null;

  return (
    <TableWrapper>
      <TableHeader>
        {TABLE_HEADERS.map(header => (
          <Cell key={header}>{header}</Cell>
        ))}
      </TableHeader>

      {receiverList.map((r, i) => (
        <TableRow key={i}>
          <Cell>{r.name}</Cell>
          <Cell>{r.phone}</Cell>
          <Cell>
            {r.quantity}
            {UNIT.QUANTITY}
          </Cell>
        </TableRow>
      ))}
    </TableWrapper>
  );
};

export default ReceiverTable;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  background-color: ${({ theme }) => theme.color.gray[200]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  border-top: 1px solid ${({ theme }) => theme.color.gray[300]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

const Cell = styled.p`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  word-break: break-word;
`;
