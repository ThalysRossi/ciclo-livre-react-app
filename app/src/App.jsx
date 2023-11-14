import Header from "./components/Header";
import { featureFlags } from "./FeatureFlags";
import Activities from "./pages/Activities";
import Definition from "./pages/Definition";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Project from "./pages/Project";
import Testimonies from "./pages/Testimonies";
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
        <Activities />
        <Definition />
        <Impacts />
        <Testimonies />
        <Footer />
      </main>
    </div>
  );
}

export default App;
