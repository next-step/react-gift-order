import styled from '@emotion/styled';
import type { OrderInfoValues } from '..';
import { useFormContext } from 'react-hook-form';

const SenderInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const SubText = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.colorScale.gray[600]};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.colorScale.red[600]};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const SenderInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderInfoValues>();

  return (
    <SenderInfoContainer>
      <h3>보내는 사람</h3>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이름을 입력하세요."
          {...register(`name`, {
            required: { value: true, message: '이름을 입력해주세요.' },
          })}
        />
        {errors.name ? (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        ) : (
          <SubText>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</SubText>
        )}
      </InputWrapper>
    </SenderInfoContainer>
  );
};

export default SenderInfo;
