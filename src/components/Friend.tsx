import styled from "@emotion/styled";
import Plus from "@/components/icons/Plus";

const Friend = () => {
  return (
    <Container>
      <Content>
        <PlusWrapper>
          <Plus />
        </PlusWrapper>
        <Msg>선물할 친구를 선택해 주세요.</Msg>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 15px;
`;
const Content = styled.button`
  border-radius: 15px;
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  padding: ${({ theme }) => theme.spacing.spacing4};
  gap: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const PlusWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
`;
const Msg = styled.p`
  width: 100%;
  text-align: start;
  font: ${({ theme }) => theme.typography.body1Bold};
`;

export default Friend;
