import styled from '@emotion/styled'
import { Plus } from 'lucide-react'

const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
    padding: ${({ theme }) => theme.spacing.spacing5};
    
`

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.text.default};
`

export const GiftFriendSelector = () => {
  return (
    <Wrapper>
      <Button>
        <IconCircle>
          <Plus size={20} color="#000" />
        </IconCircle>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </Button>
    </Wrapper>
  )
}
export default GiftFriendSelector