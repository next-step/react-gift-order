import ErrorMessage from "../common/ErrorMessage";
import styled from "@emotion/styled";
import DescriptionMessage from "../common/DescriptionMessage";
import { useFormContext } from "react-hook-form";
import { checkNameError } from "@/utils/validation";

const SenderSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ sender: string }>();
  return (
    <Section>
      <Title>보내는 사람</Title>
      <Input
        placeholder="이름을 입력하세요."
        error={!!errors.sender?.message}
        type="text"
        {...register("sender", {
          validate: value => checkNameError(value),
        })}
      />
      <MessageDiv>
        {errors.sender?.message ? (
          <ErrorMessage message={errors.sender.message} />
        ) : (
          <DescriptionMessage message="* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다." />
        )}
      </MessageDiv>
    </Section>
  );
};

export default SenderSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  min-height: 2.75rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing3} 0 ${theme.spacing.spacing1}`};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing3}`};
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red.red700 : theme.colors.gray.gray400};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};

  &:focus {
    outline: none;
    ${({ error, theme }) =>
      !error && `border: 1px solid ${theme.colors.gray.gray900}`};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }
`;

const MessageDiv = styled.div`
  margin-left: ${({ theme }) => theme.spacing.spacing2};
`;
