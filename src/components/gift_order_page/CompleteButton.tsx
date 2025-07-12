import type { FormValues } from '@/types/orderFormType';
import styled from '@emotion/styled';
import type React from 'react';
import { useFormContext, type FieldPath } from 'react-hook-form';

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

export const CompleteButton = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { watch, trigger } = useFormContext<FormValues>();
  const recipientInfo = watch('recipientInfo');

  return (
    <Container
      onClick={async () => {
        const keysToValidate: FieldPath<FormValues>[] = recipientInfo.flatMap((_, index) => [
          `recipientInfo.${index}.recipientName`,
          `recipientInfo.${index}.phoneNumber`,
          `recipientInfo.${index}.amount`,
        ]) as FieldPath<FormValues>[];
        const isValid = await trigger(keysToValidate);
        if (isValid) {
          setModalVisible(false);
        }
      }}
    >
      <Text>{recipientInfo.length}명 완료</Text>
    </Container>
  );
};
