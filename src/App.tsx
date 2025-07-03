import "@src/App.css";
import Router from "@src/router/Router";
import UserContextProvider from "./contexts/UserContextProdiver";

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
