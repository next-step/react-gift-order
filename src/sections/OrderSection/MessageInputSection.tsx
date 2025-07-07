import styled from "@emotion/styled";
import { useValidate } from "@/hooks/useValidate";
import { validateMessage } from "@/utils/validate";

const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.semantic.critical};
  font-size: 12px;
  margin-top: 4px;
`;

interface Props {
    message: string;
    setMessage: (value: string) => void;
    touched: boolean;
    error: string;
    onBlur: () => void;
}


export default function MessageInputSection({ message, setMessage, touched }: Props) {
    const { error, onBlur } = useValidate(message, validateMessage);

    return (
        <Section>
            <TextArea
                placeholder="메시지를 입력하세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={onBlur}
            />
            {touched && error && <ErrorText>{error}</ErrorText>}
        </Section>
    );
}
