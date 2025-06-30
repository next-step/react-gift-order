import Router from '@src/router/Router';
import Background, { Inner } from '@src/components/Background';
import Title from '@src/components/Title';

const App = () => {
  return (
    <Background>
      <Inner>
        <header>
          <Title />
        </header>
        <Router />
      </Inner>
    </Background>
  );
};

export default App;
