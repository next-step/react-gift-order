import styled from '@emotion/styled';

const MessageInputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};

  textarea {
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
  }
`;

const MessageInput = () => {
  return (
    <MessageInputContainer>
      <h3>메시지 입력</h3>
      <textarea placeholder="메시지를 입력해주세요." defaultValue="축하해요."></textarea>
    </MessageInputContainer>
  );
};

export default MessageInput;
