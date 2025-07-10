import styled from "@emotion/styled";

const DEFAULT_MESSAGE = `받는 사람이 없습니다. \n받는 사람을 추가해주세요.`;

const RecipientFieldArray = () => {
  return (
    <Container>
      <Msg>{DEFAULT_MESSAGE}</Msg>
    </Container>
  );
};

export default RecipientFieldArray;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: 0.5rem;
  padding: ${({ theme }) => theme.spacing.spacing6};
`;
const Msg = styled.p`
  white-space: pre-line;
  text-align: center;
  font: ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.color.gray600};
`;
