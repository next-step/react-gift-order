import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  CaptionText,
  InputWrapper,
  StyledInput,
} from '../Common/BorderInputBox';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaX } from 'react-icons/fa6';
import type { Receiver } from '@/schema/receiver';
import type { FormValues } from '@/schema/receiverNumber';
import { FormSchema } from '@/schema/receiverNumber';

type ReceiverListModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (data: Receiver[]) => void;
  initialReceives: Receiver[];
};

const RECEIVER_COUNT_LIMIT = 10;

const ReceiverListModal = ({
  open,
  onClose,
  onAdd,
  initialReceives,
}: ReceiverListModalProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { receivers: initialReceives },
    mode: 'onSubmit',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'receivers',
    control,
  });

  const onSubmit = (data: FormValues) => {
    onAdd(data.receivers);
  };

  useEffect(() => {
    if (open) {
      reset({ receivers: initialReceives });
    }
  }, [open, reset, initialReceives]);

  const handleCancel = () => {
    reset({ receivers: initialReceives });
    onClose();
  };

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalHeader>
          <ModalTitle>받는 사람</ModalTitle>
          <ModalCaption>
            * 최대 10명까지 추가 할 수 있어요.
            <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
          </ModalCaption>

          <AddReceiverButton
            type="button"
            onClick={() => {
              if (fields.length < RECEIVER_COUNT_LIMIT) {
                append({
                  receiverName: '',
                  receiverPhoneNumber: '',
                  itemCount: 1,
                });
              }
            }}
            disabled={fields.length >= RECEIVER_COUNT_LIMIT}
          >
            추가하기
          </AddReceiverButton>
        </ModalHeader>
        <ModalContent>
          {fields.map((field, index) => {
            const err = errors.receivers?.[index] || {};
            return (
              <FieldRow key={field.id}>
                <ReceiverInfoHeader>
                  <ReceiverIndex>받는사람{index + 1}</ReceiverIndex>
                  <DeleteReceiverButton
                    size={16}
                    type="button"
                    onClick={() => remove(index)}
                  />
                </ReceiverInfoHeader>

                <ReceiverInputWrapper>
                  <ModalInfoTitle>이름</ModalInfoTitle>
                  <InputWrapper>
                    <ModalStyledInput
                      {...register(`receivers.${index}.receiverName` as const)}
                      placeholder="이름을 입력하세요."
                      hasError={!!err.receiverName}
                    />
                    {err.receiverName && (
                      <CaptionText isError>
                        {err.receiverName.message}
                      </CaptionText>
                    )}
                  </InputWrapper>
                </ReceiverInputWrapper>

                <ReceiverInputWrapper>
                  <ModalInfoTitle>전화번호</ModalInfoTitle>
                  <InputWrapper>
                    <ModalStyledInput
                      {...register(
                        `receivers.${index}.receiverPhoneNumber` as const
                      )}
                      placeholder="전화번호를 입력하세요."
                      hasError={!!err.receiverPhoneNumber}
                    />
                    {err.receiverPhoneNumber && (
                      <CaptionText isError>
                        {err.receiverPhoneNumber.message}
                      </CaptionText>
                    )}
                  </InputWrapper>
                </ReceiverInputWrapper>
                <ReceiverInputWrapper>
                  <ModalInfoTitle>수량</ModalInfoTitle>
                  <InputWrapper>
                    <ModalStyledInput
                      {...register(`receivers.${index}.itemCount` as const, {
                        valueAsNumber: true,
                      })}
                      type="number"
                      placeholder="수량을 입력하세요."
                      hasError={!!err.itemCount}
                    />
                    {err.itemCount && (
                      <CaptionText isError>{err.itemCount.message}</CaptionText>
                    )}
                  </InputWrapper>
                </ReceiverInputWrapper>
              </FieldRow>
            );
          })}
        </ModalContent>
        <ModalButtonWrapper>
          <ModalCancleButton onClick={handleCancel}>취소</ModalCancleButton>
          <ModalCompleteButton type="submit">
            {fields.length}명 완료
          </ModalCompleteButton>
        </ModalButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ReceiverListModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  border-radius: 8px;
  width: 80%;
  margin: 0 ${({ theme }) => theme.spacing.spacing4};
  max-width: 600px;
  max-height: calc(100vh - 100px);
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing3}
    ${({ theme }) => theme.spacing.spacing4};
  flex-direction: column;
  position: relative;
  display: flex;
`;

const ModalHeader = styled.div`
  flex-direction: column;
`;

const ModalTitle = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.title1Bold.size};
    font-weight: ${theme.font.title1Bold.weight};
    line-height: ${theme.font.title1Bold.lineHeight};
  `}
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const ModalCaption = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: ${theme.font.label2Regular.weight};
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const AddReceiverButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => `
    font-size: ${theme.font.label2Regular.size};
    font-weight: bold;
    line-height: ${theme.font.label2Regular.lineHeight};
  `}
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.gray600};
    cursor: not-allowed;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
`;

const FieldRow = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing3};
  flex-direction: column;
`;

const ReceiverInfoHeader = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ReceiverIndex = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.subtitle2Bold.size};
    font-weight: ${theme.font.subtitle2Bold.weight};
    line-height: ${theme.font.subtitle2Bold.lineHeight};
  `}
`;

const DeleteReceiverButton = styled(FaX)`
  cursor: pointer;
`;
const ReceiverInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const ModalInfoTitle = styled.p`
  min-width: 3.5rem;
  ${({ theme }) => `
    font-size: ${theme.font.body2Regular.size};
    font-weight: ${theme.font.body2Regular.weight};
    line-height: ${theme.font.body2Regular.lineHeight};
  `}
`;

const ModalStyledInput = styled(StyledInput)`
  ${({ theme }) => `
    font-size: ${theme.font.body2Regular.size};
    font-weight: ${theme.font.body2Regular.weight};
    line-height: ${theme.font.body2Regular.lineHeight};
  `}
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;
const ModalCancleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray300};
  flex: 0.3;
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  &:focus {
    outline: none;
  }
`;

const ModalCompleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  flex: 0.7;
  border: none;
  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
  &:focus {
    outline: none;
  }
`;
