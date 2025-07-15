import styled from "@emotion/styled"
import theme from "@/styles/theme"
import Text from "@/components/Text"
import type { Receiver } from "@/pages/OrderPage"

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: ${theme.space.spacing2};
    text-align: center;
  }

  th {
    font-weight: 600;
    background: ${theme.colors.gray100};
  }

  tr + tr td {
    border-top: 1px solid ${theme.colors.gray200};
  }
`

interface Props {
  receivers: Receiver[]
}

const ReceiverList = ({ receivers }: Props) => {
  if (!receivers || receivers.length === 0) {
    return (
      <div
        style={{
          border: `1px solid ${theme.colors.gray200}`,
          borderRadius: theme.space.spacing2,
          padding: theme.space.spacing6,
          textAlign: "center",
        }}
      >
        <Text variant="body2Regular" margin="spacing0" padding="spacing0">
          받는 사람이 없습니다.
        </Text>
        <Text variant="body2Regular" margin="spacing0" padding="spacing0">
          받는 사람을 추가해 주세요.
        </Text>
      </div>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {receivers.map((r, idx) => (
          <tr key={idx}>
            <td>{r.name}</td>
            <td>{r.phone}</td>
            <td>{r.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ReceiverList
