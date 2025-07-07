import useFormInput from "@/hooks/useFormInput";
import ErrorMessage from "../common/ErrorMessage";
import {
  checkNameError,
  checkCountError,
  checkPhoneError,
} from "@/utils/validation";
import styled from "@emotion/styled";

const ReceiverSection = () => {
  const receiverInput = useFormInput(checkNameError);
  const phoneInput = useFormInput(checkPhoneError);
  const countInput = useFormInput(checkCountError, "1");

  return (
    <Section>
      <SectionTitle>받는 사람</SectionTitle>
      <InputDiv>
        <InputTitle>이름</InputTitle>
        <Input
          error={!!receiverInput.error}
          type="text"
          value={receiverInput.value}
          placeholder="이름을 입력해주세요."
          onChange={receiverInput.onChange}
        />
      </InputDiv>
      {receiverInput.error && <ErrorMessage message={receiverInput.error} />}
      <InputDiv>
        <InputTitle>전화번호</InputTitle>
        <Input
          error={!!phoneInput.error}
          type="text"
          value={phoneInput.value}
          placeholder="전화번호를 입력해주세요."
          onChange={phoneInput.onChange}
        />
      </InputDiv>
      {phoneInput.error && <ErrorMessage message={phoneInput.error} />}
      <InputDiv>
        <InputTitle>수량</InputTitle>
        <Input
          error={!!countInput.error}
          type="number"
          value={countInput.value}
          placeholder="수량을 입력해주세요."
          onChange={countInput.onChange}
        />
      </InputDiv>
      {countInput.error && <ErrorMessage message={countInput.error} />}
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
