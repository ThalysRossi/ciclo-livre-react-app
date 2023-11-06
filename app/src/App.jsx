import Header from "./components/Header";
import { featureFlags } from "./FeatureFlags";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  if (featureFlags.underConstruction) {
    return (
      <div className="overflow-hidden">
        <UnderConstruction />
      </div>
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
