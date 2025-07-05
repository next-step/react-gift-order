import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import type { ChangeEvent } from "react";
import Input from "@/pages/Order/components/Input";

interface RecipientProps {
  name: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMsgName: string | null;
  phone: string;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMsgPhone: string | null;
  quantity: number;
  onChangeQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMsgQuantity: string | null;
}

const Recipient = ({
  name,
  onChangeName,
  errorMsgName,
  phone,
  onChangePhone,
  errorMsgPhone,
  quantity: count,
  onChangeQuantity: onChangeCount,
  errorMsgQuantity: errorMsgCount,
}: RecipientProps) => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>받는 사람</Title>
      <Divider spacing="1rem" />
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <InputWrapper>
          <Input placeholder="이름을 입력하세요." value={name} onChange={onChangeName} errorMsg={errorMsgName} />
        </InputWrapper>
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input placeholder="전화번호를 입력하세요." value={phone} onChange={onChangePhone} errorMsg={errorMsgPhone} />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>수량</InputTitle>
        <Input type="number" value={count} onChange={onChangeCount} errorMsg={errorMsgCount} />
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
