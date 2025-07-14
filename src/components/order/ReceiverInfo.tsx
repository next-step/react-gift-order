import styled from '@emotion/styled';
import { useState } from 'react';
import ReceiverListModal from './receiver/ReceiverListModal';
import type { Receiver } from '@/types/order';

const Content = styled.section`
  padding: 0 16px 24px;
  background: #fff;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  ${({ theme }) => theme.typography.title2Bold};
  padding: 12px 0;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  margin: 12px 0;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.typography.label1Regular};
  cursor: pointer;
`;

const TableWrapper = styled.div`
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray[100]};
  ${({ theme }) => theme.typography.label1Bold};
  width: 33.33%;
`;

const Td = styled.td`
  padding: 12px;
  ${({ theme }) => theme.typography.label1Regular};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

const EmptyBox = styled.div`
  padding: 24px;
  border: 1px solid rgb(238, 239, 241);
  border-radius: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.typography.body2Regular};
`;

interface ReceiverInfoProps {
  receivers: Receiver[];
  setReceivers: (data: Receiver[]) => void;
}

export default function ReceiverInfo({ receivers, setReceivers }: ReceiverInfoProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Content>
        <Wrapper>
          <Title>받는 사람</Title>
          <AddButton type="button" onClick={() => setOpen(true)}>
            {receivers.length > 0 ? '수정' : '추가'}
          </AddButton>
        </Wrapper>

        {receivers.length === 0 ? (
          <EmptyBox>
            받는 사람이 없습니다. <br />
            받는 사람을 추가해주세요.
          </EmptyBox>
        ) : (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th>이름</Th>
                  <Th>전화번호</Th>
                  <Th>수량</Th>
                </tr>
              </thead>
              <tbody>
                {receivers.map((receiver, index) => (
                  <tr key={index}>
                    <Td>{receiver.name}</Td>
                    <Td>{receiver.phone}</Td>
                    <Td>{receiver.qty}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Content>
      {open && (
        <ReceiverListModal
          onClose={() => setOpen(false)}
          onSave={(data: Receiver[]) => {
            setReceivers(data);
            setOpen(false);
          }}
          initialReceivers={receivers}
        />
      )}
    </>
  );
}
