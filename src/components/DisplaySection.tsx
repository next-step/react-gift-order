import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  text-align: center;
`

const Line1 = styled.p`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textSub};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`

const Line2 = styled.p`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin: 0;
`

const DisplaySection = () => {
  return (
    <Wrapper>
      <Line1>카카오테크 캠퍼스 3기 여러분</Line1>
      <Line2>프론트엔드 2단계 과제 화이팅! 🎉</Line2>
    </Wrapper>
  )
}

export default DisplaySection
