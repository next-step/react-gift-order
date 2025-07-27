import { Container, TextArea, ErrorText } from './MessageInput.styles';

interface Props {
  message: string;
  setMessage: (msg: string) => void;
  error?: string;
}

const MessageInput: React.FC<Props> = ({ message, setMessage, error }) => {
  return (
    <Container>
      <TextArea
        placeholder="메시지를 입력해주세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default MessageInput;
