import styled from '@emotion/styled';
import React from 'react';
import BaseButton from '@/common/BaseButton';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import InputOrder from '@/common/InputOrder';

const ReceiverInfoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { control, getValues, trigger } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleComplete = async () => {
    const isValid = await trigger('recipients');
    if (isValid) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <Hint>* 최대 10명까지 추가 할 수 있어요.</Hint>
          <Hint>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</Hint>
          <BaseButton
            width="90px"
            onClick={() => {
              if (fields.length >= 10) {
                alert('최대 10명까지 추가할 수 있어요.');
                return;
              }
              append({ name: '', phone: '', quantity: 1 });
            }}
          >
            추가하기
          </BaseButton>
        </ModalHeader>

        <ModalBody>
          {fields.length === 0 ? (
            <EmptyMessage>받는 사람을 추가해주세요.</EmptyMessage>
          ) : (
            fields.map((field, index) => (
              <RecipientForm key={field.id}>
                <RecipientHeader>
                  <h4>받는 사람 {index + 1}</h4>
                  <DeleteButton onClick={() => remove(index)}>×</DeleteButton>
                </RecipientHeader>
                <Controller
                  name={`recipients.${index}.name`}
                  control={control}
                  rules={{
                    required: '이름을 입력해주세요.',
                    validate: (value) =>
                      value.trim() !== '' || '이름을 입력해주세요.',
                  }}
                  render={({ field, fieldState }) => (
                    <InputOrder
                      label="이름"
                      placeholder="이름을 입력하세요."
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
                <Controller
                  name={`recipients.${index}.phone`}
                  control={control}
                  rules={{
                    required: '전화번호를 입력해주세요.',
                    validate: (value) => {
                      const phoneRegex = /^010\d{8}$/;
                      if (!phoneRegex.test(value)) {
                        return '올바른 전화번호 형식이 아닙니다 (010XXXXXXXX)';
                      }

                      const recipients = getValues('recipients');
                      const duplicateCount = recipients.filter(
                        (recipient: any) => recipient.phone === value
                      ).length;
                      if (duplicateCount > 1) {
                        return '이미 등록된 전화번호입니다';
                      }

                      return true;
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputOrder
                      label="전화번호"
                      placeholder="전화번호를 입력하세요."
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
                <Controller
                  name={`recipients.${index}.quantity`}
                  control={control}
                  rules={{
                    required: '수량을 입력해주세요.',
                    min: { value: 1, message: '수량은 1 이상이어야 합니다.' },
                    max: { value: 100, message: '수량은 100 이하여야 합니다.' },
                  }}
                  render={({ field, fieldState }) => (
                    <InputOrder
                      label="수량"
                      type="number"
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </RecipientForm>
            ))
          )}
        </ModalBody>

        <ModalFooter>
          <BaseButton width="30%" onClick={onClose}>
            취소
          </BaseButton>
          <BaseButton
            width="68%"
            backgroundColor="#FEE500"
            onClick={handleComplete}
          >
            완료
          </BaseButton>
        </ModalFooter>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ReceiverInfoModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 552px;
  height: 750px;
  background-color: white;
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.spacing6}
    ${({ theme }) => theme.spacing.spacing4};
  overflow: hidden;
`;

const ModalHeader = styled.div`
  flex-shrink: 0;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Hint = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 8px;
`;

const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 16px 0;
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  padding: 40px 0;
`;

const RecipientForm = styled.div`
  margin-bottom: ${({ theme }) => theme.colors.gray600};
`;

const RecipientHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

const DeleteButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.default};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  flex-shrink: 0;
`;
