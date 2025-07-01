import {
  Container,
  Title,
  SubTitle,
  NotFoundImg,
  ErrorContainer,
} from './NotFound.styles'
import { useNavigate } from 'react-router-dom'
import notFoundImg from '@/assets/images/img_not_found.png'
import MyButton from '@/component/Button/Button'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <ErrorContainer>
        <NotFoundImg src={notFoundImg}></NotFoundImg>
        <Title>잘못된 접근입니다.</Title>
        <SubTitle>찾으시는 페이지가 존재하지 않습니다.</SubTitle>
        <MyButton buttonType="home" onClick={() => navigate('/')}>
          홈으로
        </MyButton>
      </ErrorContainer>
    </Container>
  )
}

export default NotFound
