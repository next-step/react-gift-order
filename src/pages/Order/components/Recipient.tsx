import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import RecipientFieldArray from "./RecipientFieldArray";

interface RecipientProps {
  onOpen: () => void;
}

const Recipient = ({ onOpen }: RecipientProps) => {
  return (
    <Content>
      <Divider spacing="1rem" />
      <Wrapper>
        <Title>받는 사람</Title>
        <ModalBtn type="button" onClick={onOpen}>
          추가
        </ModalBtn>
      </Wrapper>
      <Divider spacing="1rem" />
      <RecipientFieldArray />
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
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.typography.title2Bold};
  text-align: left;
`;
const ModalBtn = styled.button`
  ${({ theme }) => {
    return `
      background-color: ${theme.color.backgroundColor.fill}
      font: ${theme.typography.label1Regular};
      padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
    `;
  }}
  white-space: nowrap;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
