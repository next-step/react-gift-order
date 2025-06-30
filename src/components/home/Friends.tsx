import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

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

  font-size: ${theme.typography.body.body2Regular.fontSize};
  font-weight: ${theme.typography.body.body2Regular.fontWeight};
  line-height: ${theme.typography.body.body2Regular.lineHeight};

  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing3};
`

// * 선물할 친구 추가 버튼 아이콘
const AddFriendButtonIcon = styled.span`
  font-family: 'Material Icons Outlined';

  width: 44px;
  height: 44px;

  background-color: ${theme.semanticColors.brand.kakaoYellow};

  border: none;
  border-radius: ${theme.spacing.spacing4};

  font-size: 30px;
  font-weight: ${theme.typography.title.title2Regular.fontWeight};
  line-height: ${theme.typography.title.title2Regular.lineHeight};

  display: flex;
  align-items: center;
  justify-content: center;
`

// * 선물할 친구 추가 버튼 텍스트
const AddFriendButtonText = styled.span`
  font-size: ${theme.typography.subtitle.subtitle1Bold.fontSize};
  font-weight: ${theme.typography.subtitle.subtitle1Bold.fontWeight};
  line-height: ${theme.typography.subtitle.subtitle1Bold.lineHeight};
`

// * 선물할 친구 섹션
export const Friends = () => {
  return (
    <Container>
      <AddFriendButton>
        <AddFriendButtonIcon>add</AddFriendButtonIcon>
        <AddFriendButtonText>선물할 친구를 선택해 주세요.</AddFriendButtonText>
      </AddFriendButton>
    </Container>
  )
}
