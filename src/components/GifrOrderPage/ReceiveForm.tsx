import ErrorText from '@components/common/ErrorText';
import styled from '@emotion/styled';
import type { MultiOrderFormData } from '@schemas/orderSchema';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

interface ReceiveFormProps {
  index: number;
  register: UseFormRegister<MultiOrderFormData>;
  errors: FieldErrors<MultiOrderFormData>;
  remove: (index: number) => void;
}

const ReceiveForm = ({ index, register, errors, remove }: ReceiveFormProps) => {
  return (
    <Wrapper>
      <HeaderRow>
        <SectionTitle>받는사람 {index + 1}</SectionTitle>
        <DeleteButton type="button" onClick={() => remove(index)}>
          X
        </DeleteButton>
      </HeaderRow>
      <FieldRow>
        <Label htmlFor={`receiverName-${index}`}>이름</Label>
        <Input
          id={`receiverName-${index}`}
          placeholder="이름을 입력하세요."
          {...register(`recipients.${index}.receiver` as const)}
        />
      </FieldRow>
      {errors.recipients?.[index]?.receiver && (
        <ErrorText>{errors.recipients[index]?.receiver.message}</ErrorText>
      )}

      <FieldRow>
        <Label htmlFor={`receiverPhone-${index}`}>전화번호</Label>
        <Input
          id={`receiverPhone-${index}`}
          placeholder="전화번호를 입력하세요."
          {...register(`recipients.${index}.phone` as const)}
        />
      </FieldRow>
      {errors.recipients?.[index]?.phone && (
        <ErrorText>{errors.recipients[index]?.phone.message}</ErrorText>
      )}

      <FieldRow>
        <Label htmlFor={`quantity-${index}`}>수량</Label>
        <Input
          id={`quantity-${index}`}
          type="number"
          defaultValue={1}
          {...register(`recipients.${index}.quantity` as const, {
            valueAsNumber: true,
          })}
        />
      </FieldRow>
      {errors.recipients?.[index]?.quantity && (
        <ErrorText>{errors.recipients[index]?.quantity.message}</ErrorText>
      )}
    </Wrapper>
  );
};

export default ReceiveForm;

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
}));

const SectionTitle = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const Label = styled.label(({ theme }) => ({
  ...theme.typography.label1Regular,
  color: theme.colors.semantic.textDefault,
  marginLeft: theme.spacing.spacing3,
  width: '5rem',
}));

const Input = styled.input(({ theme }) => ({
  flex: '1',
  width: '100%',
  padding: theme.spacing.spacing3,
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  borderRadius: theme.spacing.spacing2,

  outline: 'none',
  '&:focus': {
    borderColor: theme.colors.semantic.textDefault,
  },
}));

const FieldRow = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing.spacing3,
}));

const HeaderRow = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  marginBottom: theme.spacing.spacing3,
}));

const DeleteButton = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  ...theme.typography.label1Regular,
  marginLeft: theme.spacing.spacing2,
  cursor: 'pointer',
  padding: 0,
  color: theme.colors.semantic.textDefault,
}));
