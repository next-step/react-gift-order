import { Global } from "@emotion/react";
import { reset } from "@/styles/reset";
import { globalStyle } from "@/styles/globalStyle";
import Router from "@/routes/Router";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Global styles={(theme) => globalStyle(theme)} />
      <Router />
    </>
  );
}

export default App;
