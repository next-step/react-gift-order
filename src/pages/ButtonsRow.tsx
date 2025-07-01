import Row from "@/components/Row"
import Text from "@/components/Text"
import Column from "@/components/Column"
import TabButton from "@/components/TabButton"
import useQueryState from "@/hooks/useQueryState"

type TargetType = "ALL" | "FEMALE" | "MALE" | "TEEN"

interface TabItem {
  id: number
  label: string
  emoji: string
  query: TargetType
}

const tabs: TabItem[] = [
  { id: 0, label: "전체", emoji: "ALL", query: "ALL" },
  { id: 1, label: "여성이", emoji: "👩🏻", query: "FEMALE" },
  { id: 2, label: "남성이", emoji: "👨🏻", query: "MALE" },
  { id: 3, label: "청소년이", emoji: "👦🏻", query: "TEEN" },
]

const ButtonsRow = () => {
  const [targetType, setTargetType] = useQueryState<TargetType>(
    "targetType",
    "ALL"
  )
  return (
    <Row>
      {tabs.map((tab) => (
        <Column key={tab.id}>
          <TabButton
            type="button"
            isActive={targetType === tab.query}
            onClick={() => setTargetType(tab.query)}
          >
            <Text
              variant="subtitle2Regular"
              margin="spacing2"
              padding="spacing2"
            >
              {tab.emoji}
            </Text>
          </TabButton>

          <Text
            variant="label2Regular"
            margin="spacing0"
            padding="spacing0"
            color={targetType === tab.query ? "blue700" : "blue300"}
          >
            {tab.label}
          </Text>
        </Column>
      ))}
    </Row>
  )
}
export default ButtonsRow
