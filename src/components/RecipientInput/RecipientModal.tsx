import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import { type RecipientData, recipientSchema } from '../../schemas/orderSchema';
import { z } from 'zod';

// 타입 정의
const recipientFormSchema = z.object({
  recipients: z.array(recipientSchema).min(0).max(10),
});

type RecipientFormData = z.infer<typeof recipientFormSchema>;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const RecipientSection = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fafafa;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background-color: #fff0f0;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const FormGroup = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const FormInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? '#ff4444' : '#ddd')};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const QuantityGroup = styled.div`
  width: 100px;
`;

const QuantityInput = styled(FormInput)`
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
`;

const AddRecipientButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #999;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 16px;
  background-color: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CompleteButton = styled.button`
  flex: 1;
  padding: 16px;
  background-color: #ffd700;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #ffc107;
  }
`;

interface RecipientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipients: RecipientData[]) => void;
  initialRecipients?: RecipientData[];
  maxCount?: number;
}

export function RecipientModal({
  isOpen,
  onClose,
  onSave,
  initialRecipients = [],
  maxCount = 10,
}: RecipientModalProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecipientFormData>({
    resolver: zodResolver(recipientFormSchema),
    defaultValues: {
      recipients:
        initialRecipients.length > 0 ? initialRecipients : [{ name: '', phone: '', quantity: 1 }],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        recipients:
          initialRecipients.length > 0 ? initialRecipients : [{ name: '', phone: '', quantity: 1 }],
      });
    }
  }, [isOpen, initialRecipients, reset]);

  const addRecipient = () => {
    if (fields.length < maxCount) {
      append({ name: '', phone: '', quantity: 1 });
    }
  };

  const removeRecipient = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: RecipientFormData) => {
    onSave(data.recipients);
    onClose();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <RecipientSection key={field.id}>
                <SectionHeader>
                  <SectionTitle>받는 사람 {index + 1}</SectionTitle>
                  {
                    <RemoveButton type="button" onClick={() => removeRecipient(index)}>
                      ×
                    </RemoveButton>
                  }
                </SectionHeader>

                <FormGroup>
                  <FormLabel>이름</FormLabel>
                  <FormInput
                    type="text"
                    {...control.register(`recipients.${index}.name`)}
                    placeholder="이름을 입력하세요."
                    hasError={!!errors.recipients?.[index]?.name}
                  />
                  {errors.recipients?.[index]?.name && (
                    <ErrorMessage>{errors.recipients[index]?.name?.message}</ErrorMessage>
                  )}
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <FormLabel>전화번호</FormLabel>
                    <FormInput
                      type="tel"
                      {...control.register(`recipients.${index}.phone`)}
                      placeholder="전화번호를 입력하세요."
                      maxLength={11}
                      hasError={!!errors.recipients?.[index]?.phone}
                    />
                    {errors.recipients?.[index]?.phone && (
                      <ErrorMessage>{errors.recipients[index]?.phone?.message}</ErrorMessage>
                    )}
                  </FormGroup>

                  <QuantityGroup>
                    <FormLabel>수량</FormLabel>
                    <QuantityInput
                      type="number"
                      {...control.register(`recipients.${index}.quantity`, {
                        valueAsNumber: true,
                      })}
                      min="1"
                      hasError={!!errors.recipients?.[index]?.quantity}
                    />
                    {errors.recipients?.[index]?.quantity && (
                      <ErrorMessage>{errors.recipients[index]?.quantity?.message}</ErrorMessage>
                    )}
                  </QuantityGroup>
                </FormRow>
              </RecipientSection>
            ))}

            <AddRecipientButton
              type="button"
              onClick={addRecipient}
              disabled={fields.length >= maxCount}
            >
              + 받는 사람 추가 ({fields.length}/{maxCount})
            </AddRecipientButton>
          </form>
        </ModalBody>

        <ButtonGroup>
          <CancelButton type="button" onClick={handleCancel}>
            취소
          </CancelButton>
          <CompleteButton type="button" onClick={handleSubmit(onSubmit)}>
            완료
          </CompleteButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}
