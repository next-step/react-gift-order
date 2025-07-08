import Spacing from "@/components/Spacing";
import styled from "@emotion/styled";
import ErrorMessage from "./ErrorMessage";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: boolean;
};

export default function SenderForm({ value, onChange, error }: Props) {
  return (
    <SenderBox>
      <Spacing height="12px" />
      <Sender>보내는 사람</Sender>
      <Spacing height="12px" />
      <SenderInputwrapper>
        <SenderInput
          placeholder="이름을 입력하세요."
          value={value}
          onChange={onChange}
          error={error}
        />
        <Spacing height="4px" />
        <SenderMessage>
          {error ? <ErrorMessage>보내는 사람 이름을 입력해주세요.</ErrorMessage>
          : "* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다."}
        </SenderMessage>
      </SenderInputwrapper>
      <Spacing height="24px" />
    </SenderBox>
  );
}

const SenderBox = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Sender = styled.p`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0px;
  text-align: left;
`;

const SenderInputwrapper = styled.div`
  width: 100%;
`;

const SenderInput = styled.textarea<{ error?: boolean}>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: border-color 200ms;
  border-style: solid;
  min-height: 2.75rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: 8px 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, error }) => 
    error? theme.colors.state.critical 
  : theme.colors.gray[400]};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const SenderMessage = styled.p`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0px;
  text-align: left;
`;
