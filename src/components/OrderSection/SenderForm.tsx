import styled from '@emotion/styled';
import InputField from '@/components/common/InputField';
import { useFormContext } from 'react-hook-form';
import { ERROR_MESSAGES } from '@/constants/validation';

const SenderForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const senderError =
    typeof errors.senderName?.message === 'string'
      ? errors.senderName.message
      : undefined;

  return (
    <Wrapper>
      <Label>보내는 사람</Label>
      <InputField
        {...register('senderName', {
          required: ERROR_MESSAGES.EMPTY_SENDER,
        })}
        placeholder="이름을 입력하세요."
        error={senderError}
      />
      <Note>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Note>
    </Wrapper>
  );
};

export default SenderForm;

const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
`;

const Label = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Note = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.gray[600]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;
