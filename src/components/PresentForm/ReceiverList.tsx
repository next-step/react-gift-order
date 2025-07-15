import styled from "@emotion/styled"
import theme from "@/styles/theme"
import Text from "../Text"
const ReceiverListBlank = styled.div`
  padding: ${theme.space.spacing6};
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.space.spacing2};
`
const ReceiverList = () => {
  return (
    <ReceiverListBlank>
      <Text variant="body2Regular" margin="spacing0" padding="spacing0">
        받는 사람이 없습니다.
      </Text>
      <Text variant="body2Regular" margin="spacing0" padding="spacing0">
        받는 사람을 추가해 주세요.
      </Text>
    </ReceiverListBlank>
  )
}
export default ReceiverList
