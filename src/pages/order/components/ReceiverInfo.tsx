import styled from "@emotion/styled";
import { useState, forwardRef, useImperativeHandle } from "react";
import {
  validateName,
  validatePhone,
  validateQuantity,
} from "@/utils/validators";

export type ReceiverInfoHandle = {
  validate: () => boolean;
};

type Props = {
  onChange?: (info: { name: string; phone: string; quantity: number }) => void;
};

const ReceiverSection = forwardRef<ReceiverInfoHandle, Props>(
  ({ onChange }, ref) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState(1);

    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [quantityError, setQuantityError] = useState("");

    const handleNameChange = (value: string) => {
      setName(value);
      const msg = validateName(value);
      setNameError(msg);
      onChange?.({ name: value, phone, quantity });
    };

    const handlePhoneChange = (value: string) => {
      setPhone(value);
      const msg = validatePhone(value);
      setPhoneError(msg);
      onChange?.({ name, phone: value, quantity });
    };

    const handleQuantityChange = (value: number) => {
      setQuantity(value);
      const msg = validateQuantity(value);
      setQuantityError(msg);
      onChange?.({ name, phone, quantity: value });
    };

    useImperativeHandle(ref, () => ({
      validate: () => {
        const nameValidationMsg = validateName(name);
        const phoneValidationMsg = validatePhone(phone);
        const quantityValidationMsg = validateQuantity(quantity);

        setNameError(nameValidationMsg);
        setPhoneError(phoneValidationMsg);
        setQuantityError(quantityValidationMsg);

        const allValid =
          nameValidationMsg === "" &&
          phoneValidationMsg === "" &&
          quantityValidationMsg === "";

        if (allValid) {
          onChange?.({ name, phone, quantity });
        }

        return allValid;
      },
    }));

    return (
      <Wrapper>
        <Title>받는 사람</Title>

        <FieldRow>
          <Label>이름</Label>
          <Input
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </FieldRow>
        {nameError && <ErrorText>{nameError}</ErrorText>}

        <FieldRow>
          <Label>전화번호</Label>
          <Input
            type="tel"
            placeholder="01012345678"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
        </FieldRow>
        {phoneError && <ErrorText>{phoneError}</ErrorText>}

        <FieldRow>
          <Label>수량</Label>
          <Input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
          />
        </FieldRow>
        {quantityError && <ErrorText>{quantityError}</ErrorText>}
      </Wrapper>
    );
  },
);

export default ReceiverSection;

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing5};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title2Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Label = styled.label`
  width: 80px;
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.default};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  color: ${({ theme }) => theme.colors.semantic.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.colorScale.gray.gray600};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.semantic.status.critical};
  ${({ theme }) => theme.typography.label2Regular};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;
