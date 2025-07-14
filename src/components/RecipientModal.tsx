import { useForm, useFieldArray } from 'react-hook-form';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import {
  nameRequiredValidator,
  phoneValidator,
  quantityValidator,
  hasDuplicates,
  isDuplicated,
} from '@/utils/validator';
import { zIndex } from '@/constants/zIndex';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.modalBackdrop};
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  width: 100%;
  max-width: 600px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  z-index: ${zIndex.modal};
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.spacing5};
`;

const Footer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.gray300};
`;

const CancelButton = styled.button`
  flex: 0.3;
  height: ${({ theme }) => theme.spacing.spacing10};
  background: ${({ theme }) => theme.colors.gray.gray100};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  text-align: center;
`;

const ConfirmButton = styled.button`
  flex: 0.7;
  height: ${({ theme }) => theme.spacing.spacing10};
  background: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray1000};
  text-align: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const CloseButton = styled.button`
  background: transparent;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const Subtext = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textSub};
  margin: 2px 0;
`;

const AddButton = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
  background: ${({ theme }) => theme.colors.gray.gray100};
  padding: ${({ theme }) => theme.spacing.spacing2};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray300};
`;

const GroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.subtitle2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const FieldLabel = styled.label`
  width: 70px;
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Bold.fontWeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

const Input = styled.input<{ isPhone?: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  color: ${({ theme }) => theme.colors.semantic.textDefault};

  &:focus {
    outline: none;
    border-color: ${({ isPhone, theme }) =>
      isPhone ? theme.colors.blue.blue300 : theme.colors.gray.gray300};
    background-color: ${({ isPhone, theme }) =>
      isPhone ? theme.colors.blue.blue100 : theme.colors.semantic.backgroundDefault};
  }
`;

const Error = styled.div<{ visible?: boolean }>`
  margin-left: 100px;
  min-height: 18px;
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  color: ${({ theme }) => theme.colors.red.red500};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export type Recipient = {
  name: string;
  phone: string;
  quantity: number;
};

type RecipientFormValues = {
  recipients: Recipient[];
};

type RecipientModalProps = {
  initialRecipients?: Recipient[];
  onCancel: () => void;
  onConfirm: (recipients: Recipient[]) => void;
};

const RecipientModal = ({ initialRecipients = [], onCancel, onConfirm }: RecipientModalProps) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RecipientFormValues>({
    defaultValues: {
      recipients: initialRecipients.length ? initialRecipients : [],
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'recipients',
  });

  const watchRecipients = watch('recipients');

  useEffect(() => {
    const phones = watchRecipients.map((r) => r.phone);
    const hasDuplicate = hasDuplicates(phones);

    if (hasDuplicate) {
      setError('recipients', { message: '중복된 전화번호가 있습니다.' });
    } else {
      clearErrors('recipients');
    }
  }, [watchRecipients, setError, clearErrors]);

  const onSubmit = (data: RecipientFormValues) => {
    if (data.recipients.length === 0) return;
    if (errors.recipients?.message) return;
    onConfirm(data.recipients);
  };

  return (
    <Overlay>
      <Modal>
        <Content>
          <HeaderWrapper>
            <Header>받는 사람</Header>
            <CloseButton type="button" onClick={onCancel}>
              X
            </CloseButton>
          </HeaderWrapper>

          <Subtext>* 최대 10명까지 추가할 수 있어요.</Subtext>
          <Subtext>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</Subtext>

          <AddButton
            type="button"
            onClick={() => fields.length < 10 && append({ name: '', phone: '', quantity: 1 })}
          >
            추가하기
          </AddButton>

          <form id="recipient-form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <FieldGroup key={field.id}>
                <GroupTitle>
                  받는 사람 {index + 1}
                  <RemoveButton type="button" onClick={() => remove(index)}>
                    X
                  </RemoveButton>
                </GroupTitle>

                <InputWrapper>
                  <InputRow>
                    <FieldLabel htmlFor={`name-${index}`}>이름</FieldLabel>
                    <Input
                      id={`name-${index}`}
                      placeholder="이름을 입력하세요."
                      {...register(`recipients.${index}.name`, {
                        validate: nameRequiredValidator,
                      })}
                    />
                  </InputRow>
                  <Error visible={!!errors.recipients?.[index]?.name}>
                    {errors.recipients?.[index]?.name?.message || ' '}
                  </Error>
                </InputWrapper>

                <InputWrapper>
                  <InputRow>
                    <FieldLabel htmlFor={`phone-${index}`}>전화번호</FieldLabel>
                    <Input
                      id={`phone-${index}`}
                      placeholder="전화번호를 입력하세요."
                      isPhone
                      {...register(`recipients.${index}.phone`, {
                        validate: (value) => {
                          const result = phoneValidator(value);
                          if (result !== true) return result;
                          return isDuplicated(
                            value,
                            watchRecipients.map((r) => r.phone)
                          )
                            ? '중복된 전화번호가 있습니다.'
                            : true;
                        },
                      })}
                    />
                  </InputRow>
                  <Error visible={!!errors.recipients?.[index]?.phone}>
                    {errors.recipients?.[index]?.phone?.message || ' '}
                  </Error>
                </InputWrapper>

                <InputWrapper>
                  <InputRow>
                    <FieldLabel htmlFor={`quantity-${index}`}>수량</FieldLabel>
                    <Input
                      id={`quantity-${index}`}
                      type="number"
                      min={0}
                      placeholder="수량"
                      {...register(`recipients.${index}.quantity`, {
                        valueAsNumber: true,
                        validate: quantityValidator,
                      })}
                    />
                  </InputRow>
                  <Error visible={!!errors.recipients?.[index]?.quantity}>
                    {errors.recipients?.[index]?.quantity?.message || ' '}
                  </Error>
                </InputWrapper>
              </FieldGroup>
            ))}

            {errors.recipients?.message && <Error visible>{errors.recipients.message}</Error>}
          </form>
        </Content>

        <Footer>
          <CancelButton type="button" onClick={onCancel}>
            취소
          </CancelButton>
          <ConfirmButton type="submit" form="recipient-form">
            {fields.length}명 완료
          </ConfirmButton>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default RecipientModal;
