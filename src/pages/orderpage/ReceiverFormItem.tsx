import { useFormContext } from "react-hook-form";
import type { ReceiverFormValues } from "../../utils/validator";
import styled from "@emotion/styled";

interface Props {
  field: ReceiverFormValues;
  index: number;
  onRemove: () => void;
}

const ReceiverFormItem = ({ field, index, onRemove }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ receivers: ReceiverFormValues[] }>();

  return (
    <div key={field.name}>
      <TitleRow>
        <Title>받는 사람 {index + 1}</Title>
        <RemoveButton type="button" onClick={onRemove} aria-label="삭제">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: "0.25rem" }}
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </RemoveButton>
      </TitleRow>

      <FormRow>
        <Label>이름</Label>
        <Input
          {...register(`receivers.${index}.name`)}
          placeholder="이름을 입력하세요."
        />
      </FormRow>
      {errors.receivers?.[index]?.name && (
        <ErrorText>{errors.receivers[index]?.name?.message}</ErrorText>
      )}

      <FormRow>
        <Label>전화번호</Label>
        <Input
          {...register(`receivers.${index}.phone`)}
          placeholder="전화번호를 입력하세요."
        />
      </FormRow>
      {errors.receivers?.[index]?.phone?.message && (
        <ErrorText>{errors.receivers[index]?.phone?.message}</ErrorText>
      )}

      <FormRow>
        <Label>수량</Label>
        <Input
          type="number"
          {...register(`receivers.${index}.quantity`, {
            valueAsNumber: true,
          })}
        />
      </FormRow>
      {errors.receivers?.[index]?.quantity && (
        <ErrorText>{errors.receivers[index]?.quantity?.message}</ErrorText>
      )}
    </div>
  );
};

export default ReceiverFormItem;

const TitleRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  width: 100%;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  text-align: left;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
`;

const Label = styled.label`
  width: 70px;
  font-size: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const ErrorText = styled.p`
  margin: 4px 0 12px 70px;
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  text-align: left;
`;

const RemoveButton = styled.button`
  padding: 4px 8px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray1000};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
