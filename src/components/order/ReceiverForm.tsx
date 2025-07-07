import styled from "@emotion/styled";
import { Padding2, Padding3 } from "./../padding/Padding";
import { PaddingMd } from "@/components/padding/Padding";

const SidePadding = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Label = styled.p`
  min-width: 3.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
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

interface ReceiverFormProps {
  values: {
    receivername: string;
    phone: string;
    quantity: string;
  };
  errors: {
    receivername: string | null;
    phone: string | null;
    quantity: string | null;
  };
  onChange: (
    field: "receivername" | "phone" | "quantity",
    value: string
  ) => void;
  onBlur: (field: "receivername" | "phone" | "quantity") => void;
}

const ReceiverForm = ({
  values,
  errors,
  onChange,
  onBlur,
}: ReceiverFormProps) => {
  return (
    <SidePadding>
      <Padding3 />
      <Title>받는 사람</Title>
      <Flex>
        <Label>이름</Label>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요."
            value={values.receivername}
            onChange={(e) => onChange("receivername", e.target.value)}
            onBlur={() => onBlur("receivername")}
          />
          {errors.receivername && <p>{errors.receivername}</p>}
        </InputWrapper>
      </Flex>
      <Padding2 />
      <Flex>
        <Label>전화번호</Label>
        <InputWrapper>
          <Input
            placeholder="전화번호를 입력하세요."
            value={values.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            onBlur={() => onBlur("phone")}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </InputWrapper>
      </Flex>
      <Padding2 />
      <Flex>
        <Label>수량</Label>
        <InputWrapper>
          <Input
            type="number"
            min="1"
            value={values.quantity}
            onChange={(e) => onChange("quantity", e.target.value)}
            onBlur={() => onBlur("quantity")}
          />
          {errors.quantity && <p>{errors.quantity}</p>}
        </InputWrapper>
      </Flex>

      <PaddingMd />
    </SidePadding>
  );
};

export default ReceiverForm;
