import styled from "@emotion/styled";
import type { UseFormRegister } from "react-hook-form";

const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  border-radius: 8px;
  font-size: 16px;
  resize: none;
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


export default function MessageInputSection({ register, error, touched, }: Props) {
  return (
    <Section>
      <TextArea {...register("message")} placeholder="메시지를 입력하세요" />
      {touched && error && <ErrorText>{error}</ErrorText>}
    </Section>
  );
}
