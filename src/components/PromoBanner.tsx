import styled from '@emotion/styled';

const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.semantic.kakaoYellow,
  borderRadius: '12px',
  padding: theme.spacing.spacing4,
  margin: `${theme.spacing.spacing4} 0`,
}));

const SubText = styled.p(({ theme }) => ({
  fontSize: theme.typography.label2Regular.fontSize,
  color: theme.colors.gray.gray600,
  margin: 0,
}));

const MainText = styled.p(({ theme }) => ({
  fontSize: theme.typography.body1Bold.fontSize,
  fontWeight: theme.typography.body1Bold.fontWeight,
  color: theme.colors.semantic.textDefault,
  margin: '4px 0 0',
}));
const PromoBanner = () => {
  return (
    <Wrapper>
      <SubText>카카오테크 캠퍼스 3기 여러분</SubText>
      <MainText>프론트엔드 2단계 과제 화이팅! 🎉</MainText>
    </Wrapper>
  );
};

export default PromoBanner;
