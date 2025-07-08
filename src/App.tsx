import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import { globalStyle } from '@/styles/globalStyle';
import { PATHS } from '@/constants/paths';

import reset from '@/styles/reset';
import Layout from '@/components/Layout';
import CategorySection from '@/components/categorySection';
import MessageSection from '@/components/messageSection';
import GiftRecipientList from '@/components/giftRecipientList';
import TrendRanking from '@/components/trendRanking';
import LoginForm from '@/Login/loginForm';
import NotFound from '@/pages/notFound';

const MainPage = () => (
  <>
    <GiftRecipientList />
    <CategorySection />
    <MessageSection />
    <TrendRanking />
  </>
);

function App() {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          ${reset};
          ${globalStyle(theme)};
        `}
      />
      <Routes>
  <Route element={<Layout />}>
    <Route path={PATHS.LOGIN} element={<LoginForm />} />
    <Route path={PATHS.ROOT} element={<MainPage />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
  </Route>
</Routes>
    </>
  );
}

export default App;
