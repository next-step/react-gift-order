import styled from '@emotion/styled';
import { X } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import type { OrderFormValues } from '@/components/OrderForm/OrderForm';
import { ErrorMessage } from './ErrorMessage';

export interface ModalProps {
  open: boolean;
  recipients: { name: string; phone: string; quantity: number }[];
  onClose: () => void;
  onConfirm: (items: { name: string; phone: string; quantity: number }[]) => void;
}

// Wrapper에 open prop을 받아 부드러운 페이드 인/아웃 처리
const Wrapper = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  opacity: open ? 1 : 0,
  visibility: open ? 'visible' : 'hidden',
  transition: 'opacity 300ms ease, visibility 300ms ease',
  padding: 16,
}));

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalSection = styled('div')({
  background: '#fff',
  borderRadius: 8,
  maxHeight: 'calc(-7.5rem + 100vh)',
  maxWidth: '37.5rem',
  width: '100%',
  height: '100%',
  padding: '16px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const RecipientSection = styled('div')({ flex: '1 1 0%', overflow: 'auto' });
const Title = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '1.6875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
}));
const Notice = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem',
  color: theme.colorScale.gray800,
  margin: 0,
  textAlign: 'left',
}));
const AddButton = styled('button')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem',
  padding: '8px 16px',
  borderRadius: 8,
  backgroundColor: theme.colorScale.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  ':hover': { backgroundColor: theme.colorScale.gray400 },
  ':active': { backgroundColor: theme.colorScale.gray500 },
}));
const SubmitButtonSection = styled('div')({ display: 'flex', gap: 12 });
const CancelButton = styled('button')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  padding: '12px 24px',
  borderRadius: 8,
  backgroundColor: theme.colorScale.gray300,
  border: 'none',
  cursor: 'pointer',
  flex: '1 1 0%',
}));
const SubmitButton = styled('button')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  padding: '12px 24px',
  borderRadius: 8,
  backgroundColor: theme.semanticColors.brand.kakaoYellow,
  border: 'none',
  cursor: 'pointer',
  flex: '3 1 0%',
}));
const Margin = styled('div')<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;
const InputWrapper = styled('div')({ flex: '1 1 0%', overflow: 'auto' });
const InputBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 0px;
`;
const RecipientNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RecipientNumber = styled.p(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
}));
const InputBoxTitle = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: 0,
  textAlign: 'left',
  minWidth: '3.75rem',
}));
const InputBoxStyle = styled('div')({ flex: 1, width: '100%' });
const InputBox = styled('input')<{ hasError?: boolean }>(({ theme, hasError }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px 12px',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: 'rgb(42, 48, 56)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: hasError ? theme.semanticColors.state.critical : theme.semanticColors.border.default,
  transition: 'border-color 200ms',
  '::placeholder': { color: theme.semanticColors.text.placeholder },
  '&:focus': {
    outline: 'none',
    borderColor: theme.colorScale.gray700,
  },
}));
const Divider = styled('hr')(({ theme }) => ({
  width: '100%',
  height: 1,
  backgroundColor: theme.semanticColors.border.default,
  border: 'none',
  margin: '8px 0px 16px',
}));

export const Modal = ({ open, onClose, onConfirm, recipients }: ModalProps) => {
  // const {
  //   register,
  //   trigger,
  //   getValues,
  //   handleSubmit,
  //   formState: { errors, isSubmitted },
  // } = useFormContext<OrderFormValues>();
  // const { fields, append, remove } = useFieldArray({
  //   control: useFormContext().control,
  //   name: 'recipients',
  // });

  // const onSubmit = handleSubmit(() => onConfirm());

  /* ① 모달 내부 전용 폼 컨텍스트 */
  const methods = useForm<OrderFormValues>({
    mode: 'onChange',
    defaultValues: { recipients }, // ← 복사본
  });
  const {
    register,
    trigger,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = methods;

  /* ② 배열 조작도 로컬 컨트롤 사용 */
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'recipients',
  });

  /* ③ 완료 시 → 검증 통과한 배열을 부모에 전달 */
  const onSubmit = handleSubmit((data) => onConfirm(data.recipients));

  const handleCancel = () => {
    reset({ recipients });
    onClose();
  };

  const addedCount = fields.length;
  return (
    <Wrapper open={open}>
      <Container>
        <ModalSection>
          <div>
            <Title>받는 사람</Title>
            <Margin height="4px" />
            <Notice>
              * 최대 10명까지 추가 할 수 있어요.
              <br />* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.
            </Notice>
            <Margin height="8px" />
            <AddButton
              type="button"
              onClick={() => append({ name: '', phone: '', quantity: 1 })}
              disabled={fields.length >= 10}
            >
              추가하기
            </AddButton>
          </div>
          <RecipientSection>
            {fields.map((field, idx) => {
              const nameError = errors.recipients?.[idx]?.name?.message;
              const phoneError = errors.recipients?.[idx]?.phone?.message;
              const qtyError = errors.recipients?.[idx]?.quantity?.message;
              const pathName = `recipients.${idx}.name` as const;
              const pathPhone = `recipients.${idx}.phone` as const;
              const pathQty = `recipients.${idx}.quantity` as const;

              return (
                <InputWrapper key={field.id}>
                  {idx > 0 && <Divider />}
                  <RecipientNumberContainer>
                    <RecipientNumber>받는 사람 {idx + 1}</RecipientNumber>
                    <X
                      size={20}
                      strokeWidth={1.5}
                      style={{ marginLeft: '0.25rem', cursor: 'pointer' }}
                      onClick={() => remove(idx)}
                    />
                  </RecipientNumberContainer>

                  {/* 이름 */}
                  <InputBoxContainer>
                    <InputBoxTitle>이름</InputBoxTitle>
                    <InputBoxStyle>
                      <InputBox
                        placeholder="이름을 입력하세요."
                        hasError={isSubmitted && !!nameError}
                        {...register(pathName, {
                          required: '이름을 입력해주세요.',
                          onBlur: () => {},
                          onChange: () => {
                            if (isSubmitted) trigger(pathName);
                          },
                        })}
                      />
                      {isSubmitted && nameError && <ErrorMessage>{nameError}</ErrorMessage>}
                    </InputBoxStyle>
                  </InputBoxContainer>

                  {/* 전화번호 */}
                  <InputBoxContainer>
                    <InputBoxTitle>전화번호</InputBoxTitle>
                    <InputBoxStyle>
                      <InputBox
                        type="tel"
                        placeholder="전화번호를 입력하세요."
                        hasError={isSubmitted && !!phoneError}
                        {...register(pathPhone, {
                          required: '전화번호를 입력해주세요.',
                          pattern: {
                            value: /^0\d{1,2}-\d{3,4}-\d{4}$/,
                            message: '올바른 전화번호 형식이 아니에요.',
                          },
                          validate: (val: string) => {
                            const phones = getValues('recipients').map((r) => r.phone);
                            return (
                              phones.filter((p) => p === val).length === 1 ||
                              '중복된 번호가 있습니다'
                            );
                          },
                          onBlur: () => {},
                          onChange: () => {
                            if (isSubmitted) trigger(pathPhone);
                          },
                        })}
                      />
                      {isSubmitted && phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
                    </InputBoxStyle>
                  </InputBoxContainer>

                  {/* 수량 */}
                  <InputBoxContainer>
                    <InputBoxTitle>수량</InputBoxTitle>
                    <InputBoxStyle>
                      <InputBox
                        type="number"
                        placeholder="수량을 입력하세요."
                        hasError={isSubmitted && !!qtyError}
                        {...register(pathQty, {
                          valueAsNumber: true,
                          required: '수량을 입력해주세요.',
                          min: { value: 1, message: '구매 수량은 1개 이상이어야 해요.' },
                          onBlur: () => {},
                          onChange: () => {
                            if (isSubmitted) trigger(pathQty);
                          },
                        })}
                      />
                      {isSubmitted && qtyError && <ErrorMessage>{qtyError}</ErrorMessage>}
                    </InputBoxStyle>
                  </InputBoxContainer>
                </InputWrapper>
              );
            })}
          </RecipientSection>
          <SubmitButtonSection>
            <CancelButton type="button" onClick={handleCancel}>
              취소
            </CancelButton>
            <SubmitButton type="button" onClick={onSubmit}>
              {addedCount}명 완료
            </SubmitButton>
          </SubmitButtonSection>
        </ModalSection>
      </Container>
    </Wrapper>
  );
};

export default Modal;
