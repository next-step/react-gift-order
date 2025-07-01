import { Container, StyledLink } from '@/pages/NotFound/NotFound.styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404 NotFound</h1>
      <p>
        요청하신 페이지가 존재하지 않거나, <br />
        이동되었을 수 있어요.
      </p>
      <StyledLink to="/">홈으로 돌아가기</StyledLink>
    </Container>
  )
}
