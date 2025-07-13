import styled from '@emotion/styled'
import type { ReceiverInfo } from './OrderForm'

interface ReceiverSectionProps {
  receivers: ReceiverInfo[]
  onAddClick: () => void
}

export function ReceiverSection({
  receivers,
  onAddClick,
}: ReceiverSectionProps) {
  return (
    <Wrapper>
      <label>받는 사람</label>
      <AddButton type="button" onClick={onAddClick}>
        추가
      </AddButton>
      <ReceiverList>
        {receivers.map((r, i) => (
          <ReceiverSummary key={i}>
            {r.name} ({r.phone}) - {r.quantity}개
          </ReceiverSummary>
        ))}
      </ReceiverList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 34px;

  input {
    flex: 1;
    width: 100%;
    padding: 10px;
    margin-top: 14px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
  }
`

const AddButton = styled.button`
  font-size: 14px;
  background: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  color: black;
  cursor: pointer;
`

const ReceiverSummary = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #333;
`

const ReceiverList = styled.div`
  margin-top: 8px;
`
