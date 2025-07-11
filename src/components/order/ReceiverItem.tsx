/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { useFormContext, useWatch } from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";
import type { FieldError } from "react-hook-form";

interface Props {
  index: number;
  onRemove: () => void;
  autoFocus?: boolean;
}

const ReceiverItem = ({ index, onRemove, autoFocus = false }: Props) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<OrderFormValues>();

  const receivers =
    useWatch({
      name: "receivers",
      control,
    }) ?? [];

  const phoneCounts = receivers.reduce((acc: Record<string, number>, r) => {
    if (r?.phone) {
      acc[r.phone] = (acc[r.phone] || 0) + 1;
    }
    return acc;
  }, {});

  const phoneErrorMsg = (
    errors?.receivers?.[index]?.phone as FieldError | undefined
  )?.message;

  const isPhoneDuplicated =
    receivers?.[index]?.phone && phoneCounts?.[receivers[index].phone] > 1;

  return (
    <ItemBlock>
      <RowHeader>
        <Label>받는 사람 {index + 1}</Label>
        <Remove type="button" onClick={onRemove} aria-label="삭제">
          ✕
        </Remove>
      </RowHeader>

      <FieldGroup>
        <Label>이름</Label>
        <Input
          {...register(`receivers.${index}.name`)}
          placeholder="이름을 입력하세요."
          autoFocus={autoFocus}
        />
      </FieldGroup>

      <FieldGroup>
        <Label>전화번호</Label>
        <Input
          {...register(`receivers.${index}.phone`)}
          placeholder="전화번호를 입력하세요."
        />
        <ErrorMsg when={!!phoneErrorMsg}>{phoneErrorMsg}</ErrorMsg>
        <ErrorMsg when={!!isPhoneDuplicated}>중복된 전화번호입니다.</ErrorMsg>
      </FieldGroup>

      <FieldGroup>
        <Label>수량</Label>
        <Input
          type="number"
          min={1}
          {...register(`receivers.${index}.quantity`, { valueAsNumber: true })}
        />
      </FieldGroup>
    </ItemBlock>
  );
};

export default ReceiverItem;

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;
  background-color: #fafafa;
`;

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
  font-size: 14px;
  color: #000;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const Remove = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};

  &:hover {
    color: ${({ theme }) => theme.colors.red500};
  }
`;

const ErrorMsg = styled("p", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "when",
})<{ when?: boolean }>`
  display: ${({ when }) => (when ? "block" : "none")};
  color: ${({ theme }) => theme.colors.red500};
  font-size: 12px;
  margin: 2px 0 0;
`;
