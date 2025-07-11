import styled from '@emotion/styled'
import { theme } from '@/shared/styles/theme'
import { Button, Typography } from '@/shared/ui'
import { useOrderForm } from '@/shared/contexts/order'
import { ReceiverAddModal } from './Receiver/ReceiverAddModal'
import { ReceiverTable } from './Receiver/ReceiverTable'

export const ReceiverSection = () => {
  const { openModal, form } = useOrderForm()
  const receivers = form.watch('receivers')

  const handleAddReceiver = () => {
    openModal()
  }

  return (
    <SectionContainer>
      {/* 섹션 헤더 */}
      <SectionHeader>
        {/* 섹션 제목 */}
        <SectionTitle variant="title2Bold">받는 사람</SectionTitle>
        {/* 추가 버튼 */}
        <AddButton variant="default" size="small" onClick={handleAddReceiver}>
          {receivers.length > 0 ? '수정' : '추가'}
        </AddButton>
      </SectionHeader>
      {/* 받는 사람 추가된 목록 */}
      <ReceiverTable />
      {/* 받는 사람 추가 모달 (평소에 안보임) */}
      <ReceiverAddModal />
    </SectionContainer>
  )
}

// * 섹션 컨테이너
const SectionContainer = styled.section`
  width: 100%;
  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing4};
  background-color: ${theme.semanticColors.background.default};
  border-bottom: 1px solid ${theme.semanticColors.border.default};

  display: flex;
  flex-direction: column;
`

// * 섹션 제목
const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing.spacing4};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// * 섹션 제목
const SectionTitle = styled(Typography)``

// * 추가 버튼
const AddButton = styled(Button)`
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
`
