import { ErrorMessage } from '@components/common/ErrorMessage';
import styled from '@emotion/styled';
import type { UseFormRegister, UseFormGetValues, FieldError } from 'react-hook-form';
import type { OrderFormValues } from '@/components/OrderForm/OrderForm';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const InputBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const InputBoxTitle = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
  minWidth: '3.75rem',
}));

const InputBoxStyle = styled.div`
  width: 100%;
`;

const InputBox = styled.input<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: '100%',
  boxSizing: 'border-box',
  color: theme.semanticColors.text.default,
  transition: 'border-color 200ms',
  borderStyle: 'solid',
  minHeight: '2.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.375rem',
  padding: '8px 12px',
  borderWidth: '1px',
  borderRadius: '8px',
  borderColor: hasError ? theme.semanticColors.state.critical : theme.semanticColors.border.default,
  '&:focus': {
    outline: 'none',
    borderColor: theme.colorScale.gray700,
  },
  '&::placeholder': {
    color: theme.semanticColors.text.placeholder,
  },
}));

interface RecipientProps {
  index: number;
  register: UseFormRegister<OrderFormValues>;
  getValues: UseFormGetValues<OrderFormValues>;
  errors?: {
    name?: FieldError;
    phone?: FieldError;
    quantity?: FieldError;
  };
}

export const Recipient = ({ index, register, getValues, errors }: RecipientProps) => {
  const nameError = errors?.name?.message;
  const phoneError = errors?.phone?.message;
  const qtyError = errors?.quantity?.message;

  return (
    <Wrapper>
      <Margin height="12px" />
      <Title>받는 사람 {index + 1}</Title>
      <Margin height="12px" />

      {/* 이름 */}
      <InputBoxContainer>
        <InputBoxTitle>이름</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            placeholder="이름을 입력하세요."
            hasError={!!nameError}
            {...register(`recipients.${index}.name`, {
              required: '이름을 입력해주세요',
            })}
          />
          {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>

      <Margin height="8px" />

      {/* 전화번호 */}
      <InputBoxContainer>
        <InputBoxTitle>전화번호</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            type="tel"
            placeholder="01012341234"
            hasError={!!phoneError}
            {...register(`recipients.${index}.phone`, {
              required: '전화번호를 입력해주세요',
              pattern: {
                value: /^010\d{8}$/,
                message: '01012341234 형태로 입력하세요',
              },
              validate: (val: string) => {
                const phones = getValues('recipients').map((r) => r.phone);
                return phones.filter((p) => p === val).length === 1 || '중복된 번호가 있습니다';
              },
            })}
          />
          {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>

      <Margin height="8px" />

      {/* 수량 */}
      <InputBoxContainer>
        <InputBoxTitle>수량</InputBoxTitle>
        <InputBoxStyle>
          <InputBox
            type="number"
            placeholder="수량을 입력하세요."
            hasError={!!qtyError}
            {...register(`recipients.${index}.quantity`, {
              required: '수량을 입력해주세요',
              min: { value: 1, message: '최소 1개 이상이어야 합니다' },
            })}
          />
          {qtyError && <ErrorMessage>{qtyError}</ErrorMessage>}
        </InputBoxStyle>
      </InputBoxContainer>

      <Margin height="24px" />
    </Wrapper>
  );
};
