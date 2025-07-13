import { phoneNumberRegex } from '@/utils/validate';
import styled from '@emotion/styled';
import { useFormContext, type UseFieldArrayReturn } from 'react-hook-form';
import type { OrderInfoValues } from '..';

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

interface ReceiverInfoProps {
  index: number;
  remove: UseFieldArrayReturn<OrderInfoValues, 'receiverInfos', 'id'>['remove'];
}

const ReceiverInfo = ({ index, remove }: ReceiverInfoProps) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<OrderInfoValues>();

  return (
    <>
      <ReceiverInfoContainer>
        <h3>받는 사람 {index + 1}</h3>
        <button type="button" onClick={() => remove(index)}>
          Delete
        </button>

        <InputContainer>
          <Text>이름</Text>
          <InputWrapper>
            <Input
              type="text"
              {...register(`receiverInfos.${index}.name`, {
                required: { value: true, message: '이름을 입력하세요.' },
                validate: value => (value.trim() === '' ? '이름을 입력해주세요.' : true),
              })}
              placeholder="이름을 입력하세요."
            />
            {errors.receiverInfos?.[index]?.name && (
              <ErrorMessage>{errors?.receiverInfos?.[index]?.name?.message}</ErrorMessage>
            )}
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <Text>전화번호</Text>
          <InputWrapper>
            <Input
              type="text"
              {...register(`receiverInfos.${index}.phoneNumber`, {
                required: { value: true, message: '전화번호를 입력하세요.' },
                pattern: {
                  value: phoneNumberRegex,
                  message: '전화번호를 입력하세요.',
                },
                validate: value => {
                  const { receiverInfos } = getValues();
                  const isDuplicated = receiverInfos
                    .filter((_, i) => i !== index)
                    .some(info => info.phoneNumber === value);
                  return !isDuplicated || '중복된 전화번호가 있습니다.';
                },
              })}
              placeholder="전화번호를 입력하세요."
            />

            {errors.receiverInfos?.[index]?.phoneNumber && (
              <ErrorMessage>{errors.receiverInfos?.[index]?.phoneNumber?.message}</ErrorMessage>
            )}
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <Text>수량</Text>
          <InputWrapper>
            <Input
              type="number"
              {...register(`receiverInfos.${index}.quantity`, {
                required: { value: true, message: '수량을 입력하세요.' },
                validate: value => value >= 1 || '구매 수량은 1개 이상이어야 해요.',
                valueAsNumber: true,
              })}
            />
            {errors.receiverInfos?.[index]?.quantity && (
              <ErrorMessage>{errors?.receiverInfos?.[index]?.quantity?.message}</ErrorMessage>
            )}
          </InputWrapper>
        </InputContainer>
      </ReceiverInfoContainer>
    </>
  );
};

export default ReceiverInfo;
