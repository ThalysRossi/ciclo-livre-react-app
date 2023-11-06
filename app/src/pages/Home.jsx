import hands from "../assets/landing-hands.png";
import layer from "../assets/Layer_1.png";
const Home = () => {
  return (
    <div className="flex" id="Home">
      <div className="flex h-full w-full bg-clRed absolute">
        <img
          src={layer}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        ></img>
        <div className="relative">
          <span className="font-sans text-xl z-10 text-white">
            Nossa missão é reduzir a pobreza menstrual em Recife!
          </span>
        </div>

        <img src={hands} className="absolute bottom-0 right-0 "></img>
      </div>
    </div>
  );
};
export default Home;
