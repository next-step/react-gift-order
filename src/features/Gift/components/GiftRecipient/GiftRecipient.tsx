import { Container, PlusButton, Text } from './GiftRecipient.styles'

const GiftRecipient: React.FC = () => {
  return (
    <Container>
      <PlusButton>＋</PlusButton>
      <Text>선물할 친구를 선택해 주세요.</Text>
    </Container>
  )
}

export default GiftRecipient
