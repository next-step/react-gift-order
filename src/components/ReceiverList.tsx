import styled from '@emotion/styled';
import { useOrderStore } from '@/stores/orderStore';

export function ReceiverList() {
  const { receivers } = useOrderStore();

  if (receivers.length === 0) {
    return (
      <ReceiverPlaceholder>
        받는 사람을 추가하면
        <br />
        여기에 표시됩니다.
      </ReceiverPlaceholder>
    );
  }

  return (
    <List>
      {receivers.map((receiver, index) => (
        <Item key={index}>
          <Text>{receiver.receiverName}</Text>
          <Text>{receiver.phoneNumber}</Text>
          <Text>{receiver.quantity}개</Text>
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 8px;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
`;

const ReceiverPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 8px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.body.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray600};
`;
