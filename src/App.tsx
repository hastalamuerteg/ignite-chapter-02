import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard/index";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
