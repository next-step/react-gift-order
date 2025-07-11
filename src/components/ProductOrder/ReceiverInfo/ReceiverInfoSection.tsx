import { useFormContext, useWatch } from 'react-hook-form';
import { useState } from 'react';
import ReceiverInfoModal from './ReceiverInfoModal';
import BaseButton from '@/common/BaseButton';
import styled from '@emotion/styled';

const ReceiverInfoSection = () => {
  const { control } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recipients = useWatch({
    control,
    name: 'recipients',
    defaultValue: [],
  });

  const hasRecipients = recipients && recipients.length > 0;

  return (
    <Section>
      <RecipientHeaderContainer>
        <Title>받는 사람</Title>
        <BaseButton onClick={() => setIsModalOpen(true)}>
          {hasRecipients ? '수정' : '추가'}
        </BaseButton>
      </RecipientHeaderContainer>

      {!hasRecipients ? (
        <RecipientListContainer>
          받는 사람이 없습니다. <br />
          받는 사람을 추가해주세요.
        </RecipientListContainer>
      ) : (
        <RecipientTable>
          <TableHeader>
            <HeaderCell>이름</HeaderCell>
            <HeaderCell>전화번호</HeaderCell>
            <HeaderCell>수량</HeaderCell>
          </TableHeader>
          <TableBody>
            {recipients.map((recipient: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{recipient.name}</TableCell>
                <TableCell>{recipient.phone}</TableCell>
                <TableCell>{recipient.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </RecipientTable>
      )}

      <ReceiverInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
};

export default ReceiverInfoSection;

const Section = styled.section`
  margin-top: 24px;
  width: 100%;
`;

const RecipientHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const RecipientListContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing7} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  line-height: ${({ theme }) => theme.spacing.spacing6};
`;

const RecipientTable = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const HeaderCell = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray800};
  border-right: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const TableBody = styled.div`
  background-color: white;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const TableCell = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  border-right: 1px solid ${({ theme }) => theme.colors.gray200};
`;
