import styled from "@emotion/styled";

const Banner = () => {
  return (
    <Container>
      <Content>
        <Label>카카오테크 캠퍼스 3기 여러분</Label>
        <Msg>프론트엔드 2단계 과제 화이팅! 🎉</Msg>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
  display: block;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.kakaoYellow};
  padding: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
`;
const Label = styled.p`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.color.textColor.sub};
`;
const Msg = styled.p`
  font: ${({ theme }) => theme.typography.label1Bold};
  color: ${({ theme }) => theme.color.textColor.default};
`;
export default Banner;
