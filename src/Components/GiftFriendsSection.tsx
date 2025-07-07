import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import { useLoginContext } from '@/contexts/LoginContext'

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray.gray100};
  padding: 32px 0 0 0;
`

const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray.gray00};
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 32px 40px;
  box-sizing: border-box;
  box-shadow: none;
  gap: 24px;
`

const AddCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.yellow.yellow400};
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlusIcon = styled(AddIcon)`
  color: ${({ theme }) => theme.colors.gray.gray900};
  font-size: 2.5rem;
`

const GuideText = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.gray.gray900};
  margin-left: 8px;
`

const GiftFriendsSection = () => {
  const { user } = useLoginContext();
  const username = user ? user.email.split('@')[0] : '';
  return (
    <Section>
      <Card>
        <AddCircle>
          <PlusIcon fontSize="inherit" />
        </AddCircle>
        <GuideText>
          {username ? `${username}님! 선물할 친구를 선택해 주세요.` : '선물할 친구를 선택해 주세요.'}
        </GuideText>
      </Card>
    </Section>
  )
}

export default GiftFriendsSection