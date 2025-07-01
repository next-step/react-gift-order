import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { typographyMixin } from '@/components/common'
import { Plus } from 'lucide-react'

// * 선물할 친구 섹션
export const Friends = () => {
  return (
    <Container>
      <AddFriendButton>
        <AddFriendButtonIconContainer>
          {/* 추가 아이콘 */}
          <Plus size={24} color={theme.colors.gray.gray900} />
        </AddFriendButtonIconContainer>
        <AddFriendButtonText>선물할 친구를 선택해 주세요.</AddFriendButtonText>
      </AddFriendButton>
    </Container>
  )
}

// * 선물할 친구 컨테이너
const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing4};

  background-color: ${theme.semanticColors.background.disabled};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// * 선물할 친구 추가 버튼
const AddFriendButton = styled.button`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing4};
  background-color: ${theme.semanticColors.background.default};

  border: none;
  border-radius: ${theme.spacing.spacing4};

  ${typographyMixin('body2Regular')}

  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing3};

  &:hover {
    background-color: ${theme.colors.gray.gray100};
  }
`

// * 선물할 친구 추가 버튼 아이콘 컨테이너
const AddFriendButtonIconContainer = styled.div`
  width: 44px;
  height: 44px;

  background-color: ${theme.semanticColors.brand.kakaoYellow};

  border: none;
  border-radius: ${theme.spacing.spacing4};

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 선물할 친구 추가 버튼 텍스트
const AddFriendButtonText = styled.span`
  ${typographyMixin('subtitle1Bold')}
`
