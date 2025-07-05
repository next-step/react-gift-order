import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type { ChangeEvent } from "react";
import Input from "@/pages/Order/components/Input";

interface RecipientProps {
  name: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  phone: string;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  count: string;
  onChangeCount: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Recipient = ({ name, onChangeName, phone, onChangePhone, count, onChangeCount }: RecipientProps) => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>받는 사람</Title>
      <Divider spacing="1rem" />
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <Input placeholder="이름을 입력하세요." value={name} onChange={onChangeName} />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input placeholder="전화번호를 입력하세요." value={phone} onChange={onChangePhone} />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>수량</InputTitle>
        <Input placeholder="여긴 임시 수량" value={count} onChange={onChangeCount} />
      </InputWrapper>
      <Divider spacing="1.5rem" />
    </Content>
  );
};

export default Recipient;

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
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
`;
const InputTitle = styled.p`
  min-width: 3.75rem;
  font: ${({ theme }) => theme.typography.body1Regular};
`;
