/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";

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
  } = useFormContext();

  const phoneError =
    (errors.receivers as FieldErrors<OrderFormValues>["receivers"])?.[index]?.phone;

  const receivers = useWatch({
    name: "receivers",
    control,
  });

  const phoneCounts = receivers?.reduce((acc: Record<string, number>, r: any) => {
    if (r?.phone) {
      acc[r.phone] = (acc[r.phone] || 0) + 1;
    }
    return acc;
  }, {});

  const isPhoneDuplicated =
    receivers?.[index]?.phone &&
    phoneCounts?.[receivers[index].phone] > 1;

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
        {phoneError && <ErrorMsg>{(phoneError as any).message}</ErrorMsg>}
        {isPhoneDuplicated && <ErrorMsg>중복된 전화번호입니다. 다시 입력해주세요.</ErrorMsg>}
      </FieldGroup>

      <FieldGroup>
        <Label>수량</Label>
        <Input
          type="number"
          min={0}
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

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.red500 || "red"};
  font-size: 12px;
  margin: 2px 0 0;
`;
