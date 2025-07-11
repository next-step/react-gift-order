import useOrderInfo from '@/hooks/useOrderInfo';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const Container = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 2.7rem;
  margin-left: 0.75rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.yellow600};
  font-size: 0.9rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
`;

export const CompleteButton = () => {
  const { isFirstTry, form, recipient, error } = useOrderInfo();
  const totalPerson = recipient.fields.length;

  useEffect(() => {
    if (!isFirstTry) {
      recipient.fields.map((_, index) => {
        const values = form.getValues();

        error.setTargetRecipientName(values.recipientInfo[index].recipientName);
        error.setTargetPhoneNumber(values.recipientInfo[index].phoneNumber);
      });
    }
  }, [form, recipient, error, isFirstTry]);

  return (
    <Container onClick={() => {}}>
      <Text>{totalPerson}명 완료</Text>
    </Container>
  );
};
