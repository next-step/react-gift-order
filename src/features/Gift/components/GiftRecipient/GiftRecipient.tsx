import * as S from './GiftRecipient.styles'
import { useUserContext } from '@/contexts/UserContext'

const GiftRecipient: React.FC = () => {
  const { user, isLoggedIn } = useUserContext()

  return (
    <S.Container>
      <S.PlusButton>＋</S.PlusButton>
      {isLoggedIn ? (
        <S.Text>{user?.nickname}님! 선물할 친구를 선택해 주세요.</S.Text>
      ) : (
        <S.Text>선물할 친구를 선택해 주세요.</S.Text>
      )}
    </S.Container>
  )
}

export default GiftRecipient
