import styled from '@emotion/styled'
import { FaPlus } from 'react-icons/fa'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin: ${({ theme }) => theme.spacing.spacing4};
  margin-top: ${({ theme }) => theme.spacing.spacing14};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundFill};
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin: 0;
`

const PlusButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border: none;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.label1Bold.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray1000};
  cursor: pointer;
`

const FriendSelection = () => {
    const handleClick = () => {
        alert('친구 선택 페이지로 이동 구현 예정.')
    }

    return (
        <Wrapper onClick={handleClick}>
            <PlusButton>
                <FaPlus />
            </PlusButton>
            <Text>선물할 친구를 선택해 주세요.</Text>
        </Wrapper>
    )
}

export default FriendSelection
