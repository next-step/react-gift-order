import * as S from './NotFound.styles'
import { useNavigate } from 'react-router-dom'
import notFoundImg from '@/assets/images/img_not_found.png'
import MyButton from '@/component/Button/Button'
import { ROUTE_PATH } from '@/routes/Router'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.ErrorContainer>
        <S.NotFoundImg src={notFoundImg}></S.NotFoundImg>
        <S.Title>잘못된 접근입니다.</S.Title>
        <S.SubTitle>찾으시는 페이지가 존재하지 않습니다.</S.SubTitle>
        <MyButton
          variant="primary"
          size="small"
          onClick={() => navigate(ROUTE_PATH.GIFT)}
        >
          홈으로
        </MyButton>
      </S.ErrorContainer>
    </S.Container>
  )
}

export default NotFound
