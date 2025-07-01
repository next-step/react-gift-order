import GiftBanner from "./components/GiftBanner/GiftBanner";
import Category from "./components/Category/Category";
import EventBanner from "./components/EventBanner/EventBanner";
import TrendingGifts from "./components/TrendingGifts/TrendingGifts";
import { Content } from "../../App.styles";
import Layout from "@/layout";

function HomePage() {
  return (
    <Layout>
      <main>
        <GiftBanner />
        <Content>
          <Category />
          <EventBanner />
          <TrendingGifts />
        </Content>
      </main>
    </Layout>
  );
}

export default HomePage;
