import styled from "@emotion/styled";
import type { UseFormRegister } from "react-hook-form";

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

interface Props {
  register: UseFormRegister<any>;
  error?: string;
  touched?: boolean;
}

export default function SenderSection({ register, error, touched }: Props) {
  return (
    <Section>
      <Label htmlFor="sender">보내는 사람</Label>
      <Input {...register("sender")} placeholder="이름을 입력하세요" />
      {touched && error && <ErrorText>{error}</ErrorText>}
    </Section>
  );
}
