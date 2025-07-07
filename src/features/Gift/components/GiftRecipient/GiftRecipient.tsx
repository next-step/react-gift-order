import { Container, PlusButton, Text } from './GiftRecipient.styles'
import { useUserContext } from '@/contexts/UserContext'

const GiftRecipient: React.FC = () => {
  const { user, isLoggedIn } = useUserContext()

  return (
    <Container>
      <PlusButton>＋</PlusButton>
      {isLoggedIn ? (
        <Text>{user?.nickname}님! 선물할 친구를 선택해 주세요.</Text>
      ) : (
        <Text>선물할 친구를 선택해 주세요.</Text>
      )}
    </Container>
  )
}

export default GiftRecipient
