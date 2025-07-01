import GiftRecipient from '@/features/Gift/components/GiftRecipient/GiftRecipient'
import GiftCategory from '@/features/Gift/components/GiftCategory/GiftCategory'
import EtceteraSection from '@/component/EtceteraSection/EtceteraSection'
import TrendingGiftRanking from '@/features/Gift/components/TrendingGiftRanking/TrendingGiftRanking'

const GiftPage = () => {
  return (
    <>
      <GiftRecipient />
      <GiftCategory />
      <EtceteraSection />
      <TrendingGiftRanking />
    </>
  )
}

export default GiftPage
