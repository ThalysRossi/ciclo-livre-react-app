import Header from "./components/Header";
import Activities from "./pages/Activities";
import Definition from "./pages/Definition";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Impacts from "./pages/Impacts";
import Project from "./pages/Project";
import Testimonies from "./pages/Testimonies";

function App() {
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
