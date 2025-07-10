import { checkNameError } from "@/utils/validation";
import ErrorMessage from "../common/ErrorMessage";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { checkPhoneError, checkCountError } from "@/utils/validation";
import { useModal } from "@/contexts/ModalContext";
import ReceiverModal from "./ReceiverModal";

const ReceiverSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{
    receiver: string;
    phone: string;
    count: number;
  }>();

  const { openModal } = useModal();

  return (
    <Section>
      <SectionTitle>받는 사람</SectionTitle>
      <button
        onClick={e => {
          e.preventDefault();
          openModal();
        }}
      >
        추가
      </button>
      <InputDiv>
        <InputTitle>이름</InputTitle>
        <InputErrorDiv>
          <Input
            error={!!errors.receiver}
            type="text"
            {...register("receiver", {
              validate: value => checkNameError(value),
            })}
          />
          {errors.receiver?.message && (
            <ErrorMessage message={errors.receiver.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
      <InputDiv>
        <InputTitle>전화번호</InputTitle>
        <InputErrorDiv>
          <Input
            error={!!errors.phone}
            type="text"
            {...register("phone", {
              validate: value => checkPhoneError(value),
            })}
          />
          {errors.phone?.message && (
            <ErrorMessage message={errors.phone.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
      <InputDiv>
        <InputTitle>수량</InputTitle>
        <InputErrorDiv>
          <Input
            error={!!errors.count}
            type="number"
            {...register("count", {
              validate: value => checkCountError(String(value)),
            })}
          />
          {errors.count?.message && (
            <ErrorMessage message={errors.count.message} />
          )}
        </InputErrorDiv>
      </InputDiv>
      <ReceiverModal />
    </Section>
  );
};

export default ReceiverSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin: ${({ theme }) =>
    `${theme.spacing.spacing2} 0 ${theme.spacing.spacing1}`};
`;

const InputTitle = styled.p`
  min-width: 3.75rem;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Regular.lineHeight};
`;

const InputErrorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  min-height: 2.75rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.semantic.text.default};
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
