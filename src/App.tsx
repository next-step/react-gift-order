import MobileLayout from './layouts/MobileLayout';
import NavBar from './components/NavBar';
import FriendSelect from './components/FriendSelect';
import GiftTheme from './components/GiftTheme';
import CheerBox from './components/CheerBox';
import GiftRanking from './components/GiftRanking';

export default function App() {
  return (
    <MobileLayout>
      <NavBar />
      <main>
        <FriendSelect />
        <GiftTheme />
        <CheerBox />
        <GiftRanking />
      </main>
    </MobileLayout>
  );
}
