import styled from '@emotion/styled';
import type { UseInputReturn } from '../hooks/useInput';
import type { useCheckAmountReturn } from '../hooks/useCheckAmount';

const ReceiverInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing2};
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
  min-width: 3.75rem;
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.colorScale.red[600]};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const ReceiverInfo = ({
  nameHook,
  numberHook,
  amountHook,
}: {
  nameHook: UseInputReturn<HTMLInputElement>;
  numberHook: UseInputReturn<HTMLInputElement>;
  amountHook: useCheckAmountReturn;
}) => {
  return (
    <ReceiverInfoContainer>
      <h3>받는 사람</h3>
      <InputContainer>
        <Text>이름</Text>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요."
            value={nameHook.value}
            onChange={nameHook.onChange}
          />
          {nameHook.error && <ErrorMessage>{nameHook.error}</ErrorMessage>}
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <Text>전화번호</Text>
        <InputWrapper>
          <Input
            placeholder="전화번호를 입력하세요."
            value={numberHook.value}
            onChange={numberHook.onChange}
          />
          {numberHook.error && <ErrorMessage>{numberHook.error}</ErrorMessage>}
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <Text>수량</Text>
        <InputWrapper>
          <Input
            placeholder="수량을 입력하세요."
            type="number"
            value={amountHook.value}
            onChange={amountHook.onChange}
          />
          {amountHook.error && <ErrorMessage>{amountHook.error}</ErrorMessage>}
        </InputWrapper>
      </InputContainer>
    </ReceiverInfoContainer>
  );
};

export default ReceiverInfo;
