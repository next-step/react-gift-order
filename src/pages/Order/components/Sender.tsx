import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type { ChangeEvent } from "react";
import Input from "@/pages/Order/components/Input";

interface SenderProps {
  senderInput: string;
  onChangeSenderInput: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string | null;
}

const Sender = ({ senderInput, onChangeSenderInput, errorMsg }: SenderProps) => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>보내는 사람</Title>
      <Divider spacing="1rem" />
      <Input placeholder="이름을 입력하세요." onChange={onChangeSenderInput} value={senderInput} errorMsg={errorMsg} />
      {!errorMsg && <Msg>* 실제 선물 발송 시 발신자이름으로 반영되는 정보입니다.</Msg>}
      <Divider spacing="1.5rem" />
    </Content>
  );
};

export default Sender;

const Content = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.title2Bold};
  text-align: left;
`;
const Msg = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.gray600};
  padding: ${({ theme }) => theme.spacing.spacing1};
  text-align: left;
`;
