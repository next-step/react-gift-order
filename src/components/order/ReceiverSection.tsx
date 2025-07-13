import styled from "@emotion/styled";
import { useModal } from "@/contexts/ModalContext";
import ReceiverModal from "./ReceiverModal";
import { useFormContext, useFieldArray } from "react-hook-form";

type FormValues = {
  receiver: {
    name: string;
    phone: string;
    count: number;
  }[];
};

const ReceiverSection = () => {
  const { openModal } = useModal();
  const { control, watch } = useFormContext<FormValues>();
  const { fields } = useFieldArray({
    control,
    name: "receiver",
  });

  const receiverList = watch("receiver");

  return (
    <Section>
      <TitleDiv>
        <SectionTitle>받는 사람</SectionTitle>
        <PlusButton
          onClick={e => {
            e.preventDefault();
            openModal();
          }}
        >
          {fields.length === 0 ? "추가" : "수정"}
        </PlusButton>
      </TitleDiv>
      {fields.length === 0 ? (
        <EmptyMessage>
          받는 사람이 없습니다.{"\n"}
          받는 사람을 추가해주세요.
        </EmptyMessage>
      ) : (
        <ReceiverList>
          <GridReceiver type="title">
            <ContentP type="title">이름</ContentP>
            <ContentP type="title">전화번호</ContentP>
            <ContentP type="title">수량</ContentP>
          </GridReceiver>
          {receiverList.map((receiver, index) => (
            <GridReceiver key={index} type="item">
              <ContentP type="item">{receiver.name}</ContentP>
              <ContentP type="item">{receiver.phone}</ContentP>
              <ContentP type="item">{receiver.count}개</ContentP>
            </GridReceiver>
          ))}
        </ReceiverList>
      )}
      <ReceiverModal />
    </Section>
  );
};

export default ReceiverSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
`;

const PlusButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing2} ${theme.spacing.spacing4}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.gray400};
  }
`;

const EmptyMessage = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.spacing6};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  white-space: pre-line;
`;

const ReceiverList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray200};
  border-radius: 8px;
`;

const GridReceiver = styled.div<{ type: "title" | "item" }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme, type }) =>
    type === "title" ? theme.colors.gray.gray200 : "transparent"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray300};
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const ContentP = styled.p<{ type: "title" | "item" }>`
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  font-weight: ${({ theme, type }) =>
    type === "title"
      ? theme.typography.label1Bold.fontWeight
      : theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Bold.lineHeight};
`;
