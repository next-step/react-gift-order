import { Typography } from '@/components/common/Typography';
import type { OrderFormData } from '@/schemas/orderForm';
import styled from '@emotion/styled';

type Props = {
  receivers: OrderFormData['receivers'];
};

export const ReceiversFieldsResultTable = ({ receivers }: Props) => {
  if (receivers.length <= 0) {
    return (
      <EmptyMessage>
        <Typography variant='body2Regular' color='gray600' style={{ textAlign: 'center' }}>
          받는 사람이 없습니다.
          <br />
          받는 사람을 추가해주세요.
        </Typography>
      </EmptyMessage>
    );
  }

  return (
    <Table>
      <TableHeader>
        <Typography variant='body2Bold' color='gray900'>
          이름
        </Typography>
        <Typography variant='body2Bold' color='gray900'>
          전화번호
        </Typography>
        <Typography variant='body2Bold' color='gray900'>
          수량
        </Typography>
      </TableHeader>
      {receivers.map((receiver, index) => (
        <Row key={index}>
          <Typography variant='body2Regular' color='gray900'>
            {receiver.name}
          </Typography>
          <Typography variant='body2Regular' color='gray900'>
            {receiver.phoneNumber}
          </Typography>
          <Typography variant='body2Regular' color='gray900'>
            {receiver.quantity}
          </Typography>
        </Row>
      ))}
    </Table>
  );
};

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.scale.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.colors.scale.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.scale.gray300};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.scale.gray200};

  &:last-child {
    border-bottom: none;
  }
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing6};
  border: 1px solid ${({ theme }) => theme.colors.scale.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
`;
