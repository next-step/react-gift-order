import styled from '@emotion/styled';
import { forwardRef } from 'react';

interface MessageInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const MessageInput = forwardRef<HTMLTextAreaElement, MessageInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <Wrapper>
        <InputArea ref={ref} {...props} placeholder="메시지를 입력해주세요." />
        {error && <ErrorText>{error}</ErrorText>}
      </Wrapper>
    );
  }
);

export default MessageInput;

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  border-radius: 8px;
`;

const InputArea = styled.textarea`
  font-family: 'Pretendard', sans-serif;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
  resize: both;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.red[500]};
  ${({ theme }) => theme.typography.body.body2Regular};
  margin: 0;
`;
