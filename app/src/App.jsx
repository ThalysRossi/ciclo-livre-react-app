import Header from "./components/Header";
import { featureFlags } from "./FeatureFlags";
import Home from "./pages/Home";
import Project from "./pages/Project";
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
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex-grow relative m-0">
        <Home />
        <Project />
      </main>
    </div>
  );
}

export default App;
