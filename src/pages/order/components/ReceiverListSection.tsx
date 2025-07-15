import { useForm, useFieldArray, useWatch } from "react-hook-form";
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import ReceiverFormDialog from "@/pages/order/components/ReceiverFormDialog";

export type Receiver = {
  name: string;
  phone: string;
  quantity: number;
};

type FormValues = {
  receivers: Receiver[];
};

type Props = {
  onChange?: (receivers: Receiver[]) => void;
};

export default function ReceiverListSection({ onChange }: Props) {
  const {
    control,
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { receivers: [] },
    mode: "onBlur",
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "receivers",
  });

  const receivers = useWatch({ control, name: "receivers" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = useCallback(
    (safeReceivers: Receiver[]) => {
      onChange?.(safeReceivers);
    },
    [onChange],
  );

  useEffect(() => {
    const safeReceivers = (receivers ?? []).filter(Boolean);
    handleChange(safeReceivers);
  }, [receivers, handleChange]);

  const handleValid = (data: FormValues) => {
    replace(data.receivers);
    setIsDialogOpen(false);
  };

  return (
    <Wrapper>
      <TitleRow>
        <Title>받는 사람</Title>
        <AddButton type="button" onClick={() => setIsDialogOpen(true)}>
          {fields.length === 0 ? "추가" : "수정"}
        </AddButton>
      </TitleRow>

      {fields.length === 0 ? (
        <EmptyBox>
          받는 사람이 없습니다. <br />
          받는 사람을 추가해주세요.
        </EmptyBox>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field) => (
              <tr key={field.id}>
                <td>{field.name}</td>
                <td>{field.phone}</td>
                <td>{field.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <ReceiverFormDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleSubmit(handleValid)}
        errors={errors}
        register={register}
        control={control}
        fields={fields}
        append={append}
        remove={remove}
        watch={watch}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing5};
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const AddButton = styled.button`
  padding: ${({ theme }) => theme.spacing.spacing2}
    ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.background.disabled};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  border-radius: 12px;
  ${({ theme }) => theme.typography.body2Regular};
`;

const EmptyBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing7} 0;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.default};
  ${({ theme }) => theme.typography.body2Regular};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;

  th,
  td {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.spacing3};
  }

  thead {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.default};
    ${({ theme }) => theme.typography.body2Bold};
    color: ${({ theme }) => theme.colors.semantic.text.default};
  }

  tbody tr:not(:last-of-type) {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.semantic.border.default};
  }
`;
