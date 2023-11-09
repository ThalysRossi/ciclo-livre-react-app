import Header from "./components/Header";
import { featureFlags } from "./FeatureFlags";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  if (featureFlags.underConstruction) {
    return (
      <div>
        <UnderConstruction />
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
