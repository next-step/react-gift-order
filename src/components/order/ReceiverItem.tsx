/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  onRemove?: () => void;
  canDelete: boolean;
};

const ReceiverItem = ({ index, onRemove, canDelete }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = `receivers.${index}`;

  return (
    <Wrapper>
      <InputGroup>
        <Label>이름</Label>
        <Input {...register(`${fieldName}.name`)} placeholder="홍길동" />
        {(errors.receivers as any)?.[index]?.name?.message && (
          <ErrorText>{(errors.receivers as any)[index].name.message}</ErrorText>
        )}
      </InputGroup>

      <InputGroup>
        <Label>전화번호</Label>
        <Input
          {...register(`${fieldName}.phone`)}
          placeholder="01012345678"
          inputMode="numeric"
        />
        {(errors.receivers as any)?.[index]?.name?.message && (
          <ErrorText>{(errors.receivers as any)[index].name.message}</ErrorText>
        )}
      </InputGroup>

      <InputGroup>
        <Label>수량</Label>
        <Input
          type="number"
          min={1}
          {...register(`${fieldName}.quantity`, { valueAsNumber: true })}
          placeholder="1"
        />
        {(errors.receivers as any)?.[index]?.name?.message && (
          <ErrorText>{(errors.receivers as any)[index].name.message}</ErrorText>
        )}
      </InputGroup>

      {canDelete && (
        <DeleteButton type="button" onClick={onRemove}>
          삭제
        </DeleteButton>
      )}
    </Wrapper>
  );
};

export default ReceiverItem;

const Wrapper = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.body2Bold.fontSize};
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red500};
  font-size: 12px;
  margin-top: 4px;
`;

const DeleteButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.red600};
  border: none;
  font-size: 14px;
  cursor: pointer;
`;
