import { theme } from '@/styles/theme'
import { typographyInput } from '@/styles/typography'
import styled from '@emotion/styled'
import type { CardData } from './types'
import { ORDER_FORM_PLACEHOLDER } from '@/data/orderContent'
import { Typography } from '../common'

type OrderCardSectionProps = {
  cardList: CardData[]
  selectedCard: CardData
  cardMessage: string
  onCardSelect: (card: CardData) => void
  onMessageChange: (message: string) => void
  messageError?: string | null
}

// * 주문하기 카드 섹션
export const OrderCardSection = ({
  cardList,
  selectedCard,
  cardMessage,
  onCardSelect,
  onMessageChange,
  messageError,
}: OrderCardSectionProps) => {
  // * 메시지 변경 핸들러
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onMessageChange(e.target.value)
  }

  return (
    <SectionContainer>
      <CardList>
        {cardList.map((card) => {
          return (
            <CardThumbnail
              key={card.id}
              onClick={() => onCardSelect(card)}
              isSelected={selectedCard?.id === card.id}
            >
              <CardThumbnailImage src={card.thumbUrl} alt={`No.${card.id} Card Thumbnail`} />
            </CardThumbnail>
          )
        })}
      </CardList>
      <SelectedCard>
        <SelectedCardImage
          src={selectedCard?.imageUrl}
          alt={`selected card No.${selectedCard.id}`}
        />
      </SelectedCard>
      <MessageContainer>
        <CardMessageArea
          placeholder={ORDER_FORM_PLACEHOLDER.card_message}
          value={cardMessage}
          onChange={handleMessageChange}
          hasError={!!messageError}
        />
        {messageError && <ErrorMessage variant="label2Regular">{messageError}</ErrorMessage>}
      </MessageContainer>
    </SectionContainer>
  )
}

// * 섹션 컨테이너 : section 시맨틱 태그
const SectionContainer = styled.section`
  width: 100%;
  height: fit-content;

  padding-top: ${theme.spacing.spacing3};
  padding-bottom: ${theme.spacing.spacing8};

  background-color: ${theme.semanticColors.background.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.spacing5};
`

// * 카드 리스트
const CardList = styled.div`
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: ${theme.spacing.spacing1};

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: ${theme.spacing.spacing1};

  /* 양끝 흐려짐 디자인 */
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 2.5%,
    rgba(0, 0, 0, 1) 97.5%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 2.5%,
    rgba(0, 0, 0, 1) 97.5%,
    rgba(0, 0, 0, 0) 100%
  );

  /* 스크롤 바 스타일 상시 표시 */
  &::-webkit-scrollbar {
    height: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray.gray500};
    border-radius: ${theme.spacing.spacing2};
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.semanticColors.background.fill};
  }
`

// * 카드 썸네일
const CardThumbnail = styled.div<{ isSelected: boolean }>`
  width: 5.125rem;
  height: 3.5rem;
  flex-shrink: 0; // ! 강제 크기 축소 방지

  overflow: hidden;

  border: 3px solid ${({ isSelected }) => (isSelected ? 'black' : 'transparent')};
  border-radius: ${theme.spacing.spacing2};

  display: flex;
  align-items: center;

  cursor: pointer;

  /* 양 끝 흐려짐으로 인한 안보임 방지 */
  &:first-child {
    margin-left: ${theme.spacing.spacing4};
  }
  &:last-child {
    margin-right: ${theme.spacing.spacing4};
  }
`

// * 카드 썸네일 이미지
const CardThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
`

// * 선택된 카드
const SelectedCard = styled.div`
  width: 22.5rem;
  height: 15rem;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;

  border-radius: ${theme.spacing.spacing3};
`

// * 선택된 카드 이미지
const SelectedCardImage = styled.img`
  width: 100%;
  height: 100%;
`

// * 메시지 컨테이너
const MessageContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
`

// * 카드 메시지 영역
const CardMessageArea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  min-height: 3.875rem;

  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};
  margin-top: ${theme.spacing.spacing3};
  border: 1px solid
    ${({ hasError }) =>
      hasError ? theme.semanticColors.status.critical : theme.semanticColors.border.default};
  border-radius: ${theme.spacing.spacing2};

  &:focus {
    outline: none;
    border-color: ${({ hasError }) =>
      hasError ? theme.semanticColors.status.critical : theme.colors.gray.gray400};
  }

  &::placeholder {
    color: ${theme.semanticColors.text.placeholder};
  }

  transition: border-color 200ms;

  ${typographyInput}
`

// * 에러 메시지
const ErrorMessage = styled(Typography)`
  color: ${theme.semanticColors.status.critical};
  margin-left: ${theme.spacing.spacing2};
`
