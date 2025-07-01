import CategorySection from '@/components/CategorySection'
import FriendSelection from '@/components/FriendSelection'
import DisplaySection from '@/components/DisplaySection'
import RankingSection from '@/components/RankingSection'

const MainPage = () => {
    return (
        <>
            <FriendSelection />
            <CategorySection />
            <DisplaySection />
            <RankingSection />
        </>
    )
}

export default MainPage