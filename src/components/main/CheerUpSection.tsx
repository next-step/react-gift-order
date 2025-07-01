import styled from "@emotion/styled";

const CheerUpSectionWrapper = styled.section(({ theme }) => ({
  display: "flex",
  backgroundColor: `${theme.color.gray[0]}`,
  padding: `0 ${theme.spacing4}`,
}));

const CheerUpSectionContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "67px",
  padding: `${theme.spacing4}`,
  borderRadius: "16px",
  backgroundColor: `${theme.color.yellow[600]}`,
}));

const CheerUpSubject = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.label2Regular.fontSize}`,
  lineHeight: `${theme.typography.label2Regular.lineHeight}`,
  fontWeight: `${theme.typography.label2Regular.fontWeight}`,
  color: `${theme.color.gray[700]}`,
}));

const CheerUpDescription = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body2Bold.fontSize}`,
  lineHeight: `${theme.typography.body2Bold.lineHeight}`,
  fontWeight: `${theme.typography.body2Bold.fontWeight}`,
  color: `${theme.color.gray[900]}`,
}));

const CheerUpSectionPadding = styled.div(({ theme }) => ({
  display: "flex",
  height: "40px",
  backgroundColor: `${theme.color.gray[0]}`,
}));

export const CheerUpSection = () => {
  return (
    <>
      <CheerUpSectionWrapper>
        <CheerUpSectionContainer>
          <CheerUpSubject>카카오테크 캠퍼스 3기 여러분</CheerUpSubject>
          <CheerUpDescription>
            프론트엔드는 재밌어요 화이팅⭐️
          </CheerUpDescription>
        </CheerUpSectionContainer>
      </CheerUpSectionWrapper>
      <CheerUpSectionPadding />
    </>
  );
};
