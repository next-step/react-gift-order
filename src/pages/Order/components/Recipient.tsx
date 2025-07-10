import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import RecipientFieldModal from "./RecipientFieldModal";

const Recipient = () => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Title>받는 사람</Title>
      <Divider spacing="1rem" />
      <RecipientFieldModal />
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
