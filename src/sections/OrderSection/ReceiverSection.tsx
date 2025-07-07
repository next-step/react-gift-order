import styled from "@emotion/styled";
import { useValidate } from "@/hooks/useValidate";
import { validateName, validatePhone, validateQuantity } from "@/utils/validate";

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
    receiverName: string;
    receiverPhone: string;
    quantity: number;
    setReceiverName: (name: string) => void;
    setReceiverPhone: (phone: string) => void;
    setQuantity: (qty: number) => void;
    touched: boolean;
    errors: {
        receiverName: string;
        receiverPhone: string;
        quantity: string;
    };
    onBlurs: {
        receiverName: () => void;
        receiverPhone: () => void;
        quantity: () => void;
    };
}


export default function ReceiverSection({ receiverName, receiverPhone, quantity, setReceiverName, setReceiverPhone, setQuantity, touched, }: Props) {
    const nameValidation = useValidate(receiverName, validateName);
    const phoneValidation = useValidate(receiverPhone, validatePhone);
    const quantityValidation = useValidate(String(quantity), (val) => validateQuantity(Number(val)));

    return (
        <Section>
            <FieldWrapper>
                <Label htmlFor="receiverName">받는 사람</Label>
                <Input
                    id="receiverName"
                    type="text"
                    placeholder="이름을 입력하세요."
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                    onBlur={nameValidation.onBlur}
                />
                {touched && nameValidation.error && <ErrorText>{nameValidation.error}</ErrorText>}
            </FieldWrapper>

            <FieldWrapper>
                <Label htmlFor="receiverPhone">전화번호</Label>
                <Input
                    id="receiverPhone"
                    type="tel"
                    placeholder="전화번호를 입력하세요 (01012345678)"
                    value={receiverPhone}
                    onChange={(e) => setReceiverPhone(e.target.value)}
                    onBlur={phoneValidation.onBlur}
                />
                {touched && phoneValidation.error && <ErrorText>{phoneValidation.error}</ErrorText>}

            </FieldWrapper>

            <FieldWrapper>
                <Label htmlFor="quantity">수량</Label>
                <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    onBlur={quantityValidation.onBlur}
                />
                {touched && quantityValidation.error && <ErrorText>{quantityValidation.error}</ErrorText>}
            </FieldWrapper>
        </Section>
    );
}
