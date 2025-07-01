import Layout from "@/components/Layout"
import Text from "@/components/Text"
import Blank from "@/components/Blank"
import PresentWho from "@/components/PresentWho"
import SentencesRow from "./SentencesRow"
import ButtonsRow from "./ButtonsRow"
import ProductGrid from "@/components/ProductGrid"

const Trending = () => {

  return (
    <Layout paddingLeft="spacing4" paddingRight="spacing4">
      <Text variant="title1Bold" margin="spacing0" padding="spacing0">
        실시간 급상승 선물랭킹
      </Text>

      <Blank height="20px" />

      <ButtonsRow />

      <PresentWho
        color="blue100"
        padding="spacing0"
        margin="spacing4"
        border="spacing3"
      >
        <SentencesRow />
      </PresentWho>
      <ProductGrid />
    </Layout>
  )
}

export default Trending
