import ErrorMessage from "../common/ErrorMessage";
import styled from "@emotion/styled";
import {
  checkCountError,
  checkNameError,
  checkPhoneError,
} from "@/utils/validation";
import type {
  UseFormRegister,
  UseFieldArrayRemove,
  FieldErrors,
} from "react-hook-form";
import { useFormContext } from "react-hook-form";
import Close from "@/components/UI/Close";
import type { FormValues } from "@/types/receiver";

type ReceiverFormProps = {
  index: number;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  remove: UseFieldArrayRemove;
};

const ReceiverForm = ({
  index,
  register,
  errors,
  remove,
}: ReceiverFormProps) => {
  const { getValues } = useFormContext<FormValues>();
  const fieldErrors = errors.modalReceiver?.[index];

  return (
    <>
      <TitleDiv>
        <FormTitle>받는 사람 {index + 1}</FormTitle>
        <CloseButton
          onClick={e => {
            e.preventDefault();
            remove(index);
          }}
        >
          <Close size="20" />
        </CloseButton>
      </TitleDiv>
      <InputDiv>
        <InputTitle>이름</InputTitle>
        <InputErrorDiv>
          <Input
            placeholder="이름을 입력하세요."
            error={!!fieldErrors?.name}
            type="text"
            {...register(`modalReceiver.${index}.name`, {
              validate: value => checkNameError(value),
            })}
          />
          {fieldErrors?.name?.message && (
            <ErrorMessage message={fieldErrors.name.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
      <InputDiv>
        <InputTitle>전화번호</InputTitle>
        <InputErrorDiv>
          <Input
            placeholder="전화번호를 입력하세요."
            error={!!fieldErrors?.phone}
            type="text"
            {...register(`modalReceiver.${index}.phone`, {
              validate: value => {
                const phones = getValues("modalReceiver").map(
                  receiver => receiver.phone || "",
                );
                return checkPhoneError(value, index, phones);
              },
            })}
          />
          {fieldErrors?.phone?.message && (
            <ErrorMessage message={fieldErrors.phone.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
      <InputDiv>
        <InputTitle>수량</InputTitle>
        <InputErrorDiv>
          <Input
            error={!!fieldErrors?.count}
            type="number"
            {...register(`modalReceiver.${index}.count`, {
              validate: value => checkCountError(String(value)),
            })}
          />
          {fieldErrors?.count?.message && (
            <ErrorMessage message={fieldErrors.count.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
    </>
  );
};

export default ReceiverForm;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const FormTitle = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.subtitle2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle2Bold.lineHeight};
`;

const CloseButton = styled.button`
  height: 20px;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};
`;

const InputTitle = styled.p`
  min-width: 3.75rem;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
`;

const InputErrorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing3}`};
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red.red700 : theme.colors.gray.gray400};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};

  &:focus {
    outline: none;
    ${({ error, theme }) =>
      !error && `border: 1px solid ${theme.colors.gray.gray900}`};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }
`;
