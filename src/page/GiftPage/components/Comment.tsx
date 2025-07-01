import styled from '@emotion/styled';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const Container = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.colorScale.yellow[600]};
  padding: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
`;

const SubText = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  margin: 0px;
  text-align: left;
`;

const MainText = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0px;
  text-align: left;
`;

const Comment = () => {
  return (
    <Section>
      <Container>
        <SubText>카카오테크 캠퍼스 3기여러분</SubText>
        <MainText>프론트엔드 2단계 과제 화이팅! 🎉</MainText>
      </Container>
    </Section>
  );
};

export default Comment;
