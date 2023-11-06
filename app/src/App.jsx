import Header from "./components/Header";
import { featureFlags } from "./FeatureFlags";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  console.log(featureFlags.underConstruction);
  if (featureFlags.underConstruction) {
    return (
      <>
        <UnderConstruction />
      </>
    );
  }
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
