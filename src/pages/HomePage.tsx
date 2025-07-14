import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import FeaturedGifts from '@/components/FeaturedGifts';
import SupportBanner from '@/components/SupportBanner';
import LiveRanking from '@/components/LiveRanking';
import Footer from '@/components/Footer';

const HomePage = () => (
    <>
        <Hero />
        <CategoryList />
        <FeaturedGifts />
        <SupportBanner />
        <LiveRanking />
        <Footer />
    </>
);

export default HomePage; 