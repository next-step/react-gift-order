import styled from '@emotion/styled'
import { Table } from '@/shared/ui'
import { useOrderForm } from '@/shared/contexts/order'
import type { ReceiverData } from '../types'

export const ReceiverTable = () => {
  const { form } = useOrderForm()
  const receivers = form.watch('receivers')

  // * 테이블 헤더
  const headers = ['이름', '전화번호', '수량']

  // * 테이블 데이터 변환
  const tableData = receivers.map((receiver: ReceiverData) => [
    receiver.name,
    receiver.phone,
    receiver.count.toString(),
  ])

  // * 빈 상태 메시지
  const emptyMessage = `받는 사람이 없습니다.
받는 사람을 추가해주세요.`

  return (
    <StyledReceiverTable>
      <Table headers={headers} data={tableData} emptyMessage={emptyMessage} />
    </StyledReceiverTable>
  )
}

// * 받는 사람 테이블 스타일
const StyledReceiverTable = styled.div`
  width: 100%;
`
