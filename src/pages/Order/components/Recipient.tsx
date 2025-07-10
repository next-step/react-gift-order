import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import Input from "@/pages/Order/components/Input";
import { useOrderContext } from "@/contexts/orderContext";

const Recipient = () => {
  const { formData, onChangeOrder, errorMsg } = useOrderContext();
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>받는 사람</Title>
      <Divider spacing="1rem" />
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <InputWrapper>
          <Input
            name="name"
            placeholder="이름을 입력하세요."
            value={formData.recipients.name}
            onChange={onChangeOrder}
            errorMsg={errorMsg.recipients.name}
          />
        </InputWrapper>
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input
          name="phone"
          placeholder="전화번호를 입력하세요."
          value={formData.recipients.phone}
          onChange={onChangeOrder}
          errorMsg={errorMsg.recipients.name}
        />
      </InputWrapper>
      <Divider spacing="0.5rem" />
      <InputWrapper>
        <InputTitle>수량</InputTitle>
        <Input
          name="quantity"
          type="number"
          value={formData.recipients.quantity}
          onChange={onChangeOrder}
          errorMsg={errorMsg.recipients.quantity}
        />
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
