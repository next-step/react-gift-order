import styled from "@emotion/styled";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.gray.gray300};
  border-radius: 6px;
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.semantic.critical};
  font-size: 12px;
  margin-top: 4px;
`;

const FieldWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

interface Props {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  touched: Partial<Record<string, boolean>>;
}


export default function ReceiverSection({ register, errors, touched }: Props) {
    return (
        <Section>
            <FieldWrapper>
                <Label htmlFor="receiverName">받는 사람</Label>
                <Input
                    id="receiverName"
                    type="text"
                    {...register("receiverName")}
                />
                {touched && errors.receiverName && <ErrorText>{errors.receiverName.message as string}</ErrorText>}
            </FieldWrapper>

            <FieldWrapper>
                <Label htmlFor="receiverPhone">전화번호</Label>
                <Input
                    id="receiverPhone"
                    type="tel"
                    {...register("receiverPhone")}
                />
                {touched && errors.receiverPhone && <ErrorText>{errors.receiverPhone.message as string}</ErrorText>}

            </FieldWrapper>

            <FieldWrapper>
                <Label htmlFor="quantity">수량</Label>
                <Input
                    id="quantity"
                    type="number"
                    {...register("quantity", { valueAsNumber: true })}
                />
                {touched && errors.quantity && <ErrorText>{errors.quantity.message as string}</ErrorText>}
            </FieldWrapper>
        </Section>
    );
}
