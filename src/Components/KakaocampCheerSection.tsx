import styled from '@emotion/styled'

const Section = styled.section`
  width: 100%;
  margin: 28px 0 0 0;
  padding: 0;
`

const Banner = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.yellow.yellow200} 0%, ${({ theme }) => theme.colors.yellow.yellow400} 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  gap: 20px;
`

const CheerText = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.colors.brown.brown800};
  line-height: 1.4;
`

const KakaocampCheerSection = () => {
  return (
    <Section>
      <Banner>
        <CheerText>
          카테캠 화이팅!<br />
          오늘도 즐거운 개발 되세요 :)
        </CheerText>
      </Banner>
    </Section>
  )
}

export default KakaocampCheerSection 