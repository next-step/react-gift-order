import Layout from "@/layout";
import { orderCardMockData } from "@/data/orderCardMockData";
import styled from "@emotion/styled";
import CardSelection from "./CardSelection/CardSelection";
import { useCardSelection } from "./hooks/useCardSelection";

const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.disabled};
  gap: 10px;
`;

const SendSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  color: ${({ theme }) => theme.colors.text.default};
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.background.default};
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.text.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.components.form.focusBorderColor};
  }
`;

function OrderPage() {
  const { selectedCard, message, handleCardSelect, handleMessageChange } =
    useCardSelection(orderCardMockData);

  return (
    <Layout>
      <OrderPageContainer>
        <CardSelection
          cards={orderCardMockData}
          selectedCard={selectedCard}
          message={message}
          onSelect={handleCardSelect}
          onMessageChange={handleMessageChange}
        />
        <SendSection>
          <SectionTitle>보내는 사람</SectionTitle>
          <SendForm>
            <Input type="text" placeholder="이름을 입력해주세요" />
          </SendForm>
        </SendSection>
      </OrderPageContainer>
    </Layout>
  );
}

export default OrderPage;
