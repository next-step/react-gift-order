import GlobalStyle from '../styles/global';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme/theme';
import NavigationBar from '@components/NavigationBar';
import ReceiverSelection from '@components/ReceiverSelection';
import PresentTheme from '@components/PresentTheme';
import Fighting from '@components/Fighting';
import PresentRanking from '@components/PresentRanking';

const Warpper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.semanticColors.background.fill};
`;

const MainArea = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;
`;

const MarginBox = styled.div`
  width: 100%;
  height: 24px;
  background-color: transparent;
`;

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Warpper>
          <NavigationBar />
          <MainArea>
            <main>
              <ReceiverSelection />
              <MarginBox />
              <PresentTheme />
              <MarginBox />
              <Fighting />
              <MarginBox />
              <PresentRanking />
            </main>
          </MainArea>
        </Warpper>
      </ThemeProvider>
    </>
  );
};

export default Home;
