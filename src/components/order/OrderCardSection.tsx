import { orderCardMock } from '@/data/orderCardMock'
import { theme } from '@/styles/theme'
import { typographyInput } from '@/styles/typography'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

type CardData = {
  id: number
  thumbUrl: string
  imageUrl: string
  defaultTextMessage: string
}

// * 주문하기 카드 섹션
export const OrderCardSection = () => {
  // * 카드 목 데이터를 가져와 제일 첫 카드를 디폴트 값으로 지정
  // ! 추후 진짜 데이터를 가져온다면 로직 변경이 필요
  const cardList: CardData[] = orderCardMock
  const [selectedCard, setSelectedCard] = useState<CardData>(cardList[0])
  const [cardMessage, setCardMessage] = useState(cardList[0].defaultTextMessage)

  // * 카드 선택 핸들러
  const handleCardSelect = (card: CardData) => {
    setSelectedCard(card)
  }

  // * 메시지 변경 핸들러
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // * 메시지 입력 시 상태 업데이트
    setCardMessage(event.target.value)
  }

  useEffect(() => {
    // * 새로운 디폴트 메시지 지정
    const newCardMessage = selectedCard.defaultTextMessage
    setCardMessage(newCardMessage)
  }, [selectedCard])

  return (
    <SectionContainer>
      <CardList>
        {cardList.map((card) => {
          return (
            <CardThumbnail
              key={card.id}
              onClick={() => handleCardSelect(card)}
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
      <CardMessageArea
        placeholder={ORDER_FORM_PLACEHOLDER.card_message}
        value={cardMessage}
        onChange={handleMessageChange}
      />
    </SectionContainer>
  )
}

// * 주문하기 폼 placeholder
const ORDER_FORM_PLACEHOLDER = {
  card_message: '메시지를 입력해주세요.',
  sender: {
    name: '이름을 입력하세요.',
  },
  reciever: {
    name: '이름을 입력하세요.',
    phone: '전화번호를 입력하세요.',
  },
}

// * 섹션 컨테이너 : section 시맨틱 태그
const SectionContainer = styled.section`
  width: 100%;
  height: fit-content;

  padding: ${theme.spacing.spacing3} 0;

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

// * 카드 메시지 영역
const CardMessageArea = styled.textarea`
  width: 95%;
  min-height: 3.875rem;

  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};
  margin: ${theme.spacing.spacing3} 0;
  border: 1px solid ${theme.semanticColors.border.default};
  border-radius: ${theme.spacing.spacing2};

  &:focus {
    border-color: ${theme.colors.gray.gray400};
  }

  transition: border-color 200ms;

  ${typographyInput}
`
