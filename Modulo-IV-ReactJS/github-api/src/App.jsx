import { Header, Footer, Main } from "./components/layout/";
import GitHubProvider from "./providers/github-provider";
import "./App.css";

function App() {
  return (
    <>
      <GitHubProvider>
        <Header />
        <Main />
        <Footer />
      </GitHubProvider>
    </>
  );
}

export default App;
