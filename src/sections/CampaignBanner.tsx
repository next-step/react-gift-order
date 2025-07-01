import styled from "@emotion/styled";

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing5};
  background-color: ${({ theme }) => theme.color.semantic.backgroundDefault};
`;

const Banner = styled.div`
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.spacing4};
  color: ${({ theme }) => theme.color.semantic.textDefault};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.semantic.textSub};
  margin: 0;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.body.body2Bold};
  margin: 0;
`;

export default function CampaignBanner() {
    return (
        <Wrapper>
            <Banner>
                <Subtitle>카카오테크 캠퍼스 3기 여러분</Subtitle>
                <Title>프론트엔드 2단계 과제 화이팅! 🎉</Title>
            </Banner>
        </Wrapper>
    );
}
