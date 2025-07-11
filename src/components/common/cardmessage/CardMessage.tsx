import styled from "@emotion/styled";
import type { UseFormRegister } from "react-hook-form";
import type { OrderFormData } from "../../order/receiverlist/types";
const CardMessageWrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;
const TextAreaDiv = styled.div`
  width: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  color: rgb(42, 48, 56);
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: rgb(220, 222, 227);
`;
interface CardMessageFormProps {
  register: UseFormRegister<OrderFormData>;
  error?: string;
}
const CardMessage = ({ register, error }: CardMessageFormProps) => {
  return (
    <CardMessageWrapper>
      <TextAreaDiv>
        <TextArea
          {...register("cardMessage")}
          placeholder="축하해요."
          name=""
          id=""
        ></TextArea>
        {error && <p>{error}</p>}
      </TextAreaDiv>
    </CardMessageWrapper>
  );
};

export default CardMessage;
