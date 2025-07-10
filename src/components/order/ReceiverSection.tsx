import styled from "@emotion/styled";
import { useModal } from "@/contexts/ModalContext";
import ReceiverModal from "./ReceiverModal";

const ReceiverSection = () => {
  const { openModal } = useModal();

  return (
    <Section>
      <SectionTitle>받는 사람</SectionTitle>
      <button
        onClick={e => {
          e.preventDefault();
          openModal();
        }}
      >
        추가
      </button>
      <ReceiverModal />
    </Section>
  );
};

export default ReceiverSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;
