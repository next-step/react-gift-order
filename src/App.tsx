import GlobalStyle from '@/styles/GlobalStyle';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import CategorySection from '@/components/Category/CategorySection';
import SectionTitle from '@/components/SectionTitle';
import GiftReceiverSelect from './components/GiftReceiverSelect/GiftReceiverSelect';
import GiftRankingSection from './components/GiftRanking/GiftRankingSection';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <NavigationBar />
        <GiftReceiverSelect />
        <SectionTitle title="선물 테마" />
        <CategorySection />
        <SectionTitle title="실시간 급상승 선물랭킹" />
        <GiftRankingSection />
      </Layout>
    </>
  );
}

export default App;
