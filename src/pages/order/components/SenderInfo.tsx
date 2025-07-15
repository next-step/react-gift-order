import { validateSenderName } from "@/utils/validators";
import styled from "@emotion/styled";
import { useState, forwardRef, useImperativeHandle } from "react";

export type SenderInfoHandle = {
  validate: () => boolean;
};

type Props = {
  onChange?: (name: string) => void;
};

const SenderInfo = forwardRef<SenderInfoHandle, Props>(({ onChange }, ref) => {
  const [sender, setSender] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setSender(value);
    setError("");
    onChange?.(value);
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      const msg = validateSenderName(sender);
      setError(msg);
      return msg === "";
    },
  }));

  return (
    <Container>
      <Title>보내는 사람</Title>
      <Input
        placeholder="이름을 입력하세요."
        value={sender}
        onChange={(e) => handleChange(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Note>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Note>
    </Container>
  );
});

export default SenderInfo;

const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.subtitle1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.default};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.colorScale.gray.gray600};
  }
`;

const Note = styled.p`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  ${({ theme }) => theme.typography.body2Regular};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.semantic.status.critical};
  ${({ theme }) => theme.typography.label2Regular};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;
