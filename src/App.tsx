import GlobalStyle from '@/styles/GlobalStyle';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import CategorySection from '@/components/Category/CategorySection';
import SectionTitle from '@/components/SectionTitle';
import GiftReceiverSection from './components/GiftReceiverSelect/GiftReceiverSelect';


function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <GiftReceiverSection/>
      <SectionTitle title="선물 테마" />
      <CategorySection />
      <SectionTitle title="실시간 급상승 선물랭킹" />
    </>
  );
}

export default App;
