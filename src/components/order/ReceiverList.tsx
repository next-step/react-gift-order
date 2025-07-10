/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ReceiverItem from "./ReceiverItem";
import type {
  UseFieldArrayRemove,
  FieldArrayWithId,
} from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";

type Props = {
  fields: FieldArrayWithId<OrderFormValues, "receivers", "id">[];
  remove: UseFieldArrayRemove;
};

const ReceiverList = ({ fields, remove }: Props) => {
  return (
    <ListWrapper>
      {fields.map((field, index) => (
        <ReceiverItem
          key={field.id} 
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
    </ListWrapper>
  );
};

export default ReceiverList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 12px;
`;
