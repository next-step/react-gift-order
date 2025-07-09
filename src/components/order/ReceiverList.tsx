/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFieldArray, useFormContext } from "react-hook-form";
import ReceiverItem from "@/components/order/ReceiverItem";

const ReceiverList = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "receivers" });

  return (
    <Wrapper>
      {fields.map((field, index) => (
        <ReceiverItem
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
          canDelete={fields.length > 1}
        />
      ))}

      {fields.length < 10 && (
        <AddButton
          type="button"
          onClick={() => append({ name: "", phone: "", quantity: 1 })}
        >
          추가
        </AddButton>
      )}
    </Wrapper>
  );
};

export default ReceiverList;

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px dashed ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
`;
