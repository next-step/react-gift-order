import Router from '@src/router/Router';
import Background, { Inner } from '@src/components/Background';
import Title from '@src/components/Title';
import { css } from '@emotion/react';

const mainStyle = css`
  padding-top: 2.75rem;
`;

const App = () => {
  return (
    <Background>
      <Inner>
        <header>
          <Title />
        </header>
        <main css={mainStyle}>
          <Router />
        </main>
      </Inner>
    </Background>
  );
};

export default App;
