import styled from '@emotion/styled';
import type { OrderInfoValues } from '..';
import { useFormContext } from 'react-hook-form';

const MessageInputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.spacing2};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
  }
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.colorScale.red[600]};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const MessageInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderInfoValues>();

  return (
    <MessageInputContainer>
      <Title>메시지 입력</Title>
      <Textarea
        placeholder="메시지를 입력해주세요."
        {...register(`message`, {
          required: { value: true, message: '메시지를 입력해주세요.' },
        })}
      ></Textarea>
      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
    </MessageInputContainer>
  );
};

export default MessageInput;
