import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import Layout from "@/layout/Layout";
import { Routes } from "@/routes/routes";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
