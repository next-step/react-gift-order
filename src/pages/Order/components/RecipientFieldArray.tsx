import styled from "@emotion/styled";
import type { OrderFormType } from "@/pages/Order/components/Order";
import { useFieldArray, useFormContext } from "react-hook-form";

const DEFAULT_MESSAGE = `받는 사람이 없습니다.\n받는 사람을 추가해주세요.`;

interface RecipientFieldProps {
  isEmpty: boolean;
}
interface MsgProps {
  isValid: boolean;
}

const RecipientFieldArray = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<OrderFormType>();
  const { fields } = useFieldArray({ control, name: "recipients" });
  const isEmpty = fields.length === 0;
  const isValidField = !errors.recipients;
  return (
    <Container isEmpty={isEmpty}>
      {isEmpty ? (
        <Msg isValid={isValidField}>{DEFAULT_MESSAGE}</Msg>
      ) : (
        <>
          <Items>
            <Title>이름</Title>
            <Title>전화번호</Title>
            <Title>수량</Title>
          </Items>
          {fields.map((item) => (
            <Items key={item.id}>
              <Item>{item.name}</Item>
              <Item>{item.phone}</Item>
              <Item>{item.quantity}</Item>
            </Items>
          ))}
        </>
      )}
    </Container>
  );
};

export default RecipientFieldArray;

const Container = styled.div<RecipientFieldProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 0.5rem;
  overflow: hidden;
  ${({ isEmpty, theme }) =>
    isEmpty
      ? ` 
          justify-content: center;
          align-items: center;
          padding: ${theme.spacing.spacing6};
        `
      : `
          & > div:not(:first-of-type) {
            background-color: white;
            border-top: 1px solid ${theme.color.gray300};
          }
  `}
`;
const Msg = styled.p<MsgProps>`
  white-space: pre-line;
  text-align: center;
  font: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme, isValid }) => (isValid ? theme.color.gray600 : theme.color.stateColor.critical)};
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing3};
  background-color: ${({ theme }) => theme.color.gray200};
`;
const Title = styled.p`
  font: ${({ theme }) => theme.typography.label1Bold};
`;
const Item = styled.p`
  font: ${({ theme }) => theme.typography.label1Regular};
`;
