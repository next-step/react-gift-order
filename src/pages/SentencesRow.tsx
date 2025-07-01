import SentenceTab from "@/components/SentenceTab"
import Row from "@/components/Row"
import Column from "@/components/Column"
import Text from "@/components/Text"
import useQueryState from "@/hooks/useQueryState"

type RankType = "MANY_WISH_RECEIVE" | "MANY_GIFT" | "MANY_WISH"
interface SentenceItem {
  id: number
  label: string
  query: RankType
}

const sentences: SentenceItem[] = [
  { id: 5, label: "받고 싶어한", query: "MANY_WISH_RECEIVE" },
  { id: 6, label: "많이 선물한", query: "MANY_GIFT" },
  { id: 7, label: "위시로 받은", query: "MANY_WISH" },
]

const SentencesRow = () => {
  const [rankType, setRankType] = useQueryState<
    "MANY_WISH_RECEIVE" | "MANY_GIFT" | "MANY_WISH"
  >("rankType", "MANY_WISH_RECEIVE")
  return (
    <Row>
      {sentences.map((s) => (
        <Column key={s.id} style={{ flex: 1 }}>
          <SentenceTab
            active={rankType === s.query}
            onClick={() => setRankType(s.query)}
          >
            <Text
              variant="label2Regular"
              margin="spacing0"
              padding="spacing0"
              color={rankType === s.query ? "blue700" : "blue400"}
              style={{
                fontWeight: rankType === s.query ? 700 : 400,
              }}
            >
              {s.label}
            </Text>
          </SentenceTab>
        </Column>
      ))}
    </Row>
  )
}
export default SentencesRow
