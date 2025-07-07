import styled from '@emotion/styled';

interface MessageInputProps {
  value: string;
}

const MessageInput = ({ value }: MessageInputProps) => {
  return (
    <Wrapper>
      <InputArea value={value} placeholder="메시지를 입력해주세요." />
    </Wrapper>
  );
};

export default MessageInput;

const Wrapper = styled.div`
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
