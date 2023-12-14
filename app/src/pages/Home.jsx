import { useRef } from "react";
import hands from "../assets/hands.svg";
import landingHands from "../assets/landing-hands.svg";
import layer from "../assets/Layer_1.png";
import { useIsVisible } from "../hooks/UseIsVisible";
const Home = () => {
  const refContent = useRef();
  const isVisibleContent = useIsVisible(refContent);

  const refImage = useRef();
  const isVisibleImage = useIsVisible(refImage);
  return (
    <div
      className="flex flex-col md:flex-row  h-[11%] md:h-[17%] w-full pt-28 relative bg-clRed items-start justify-evenly overflow-hidden md:overflow-visible"
      id="Home"
    >
      <img
        src={layer}
        className="w-full h-full object-cover mix-blend-overlay absolute"
      ></img>
      <div
        ref={refContent}
        className={`flex flex-col pt-10 px-7 text-center md:text-start md:pl-80 md:pt-32 md:pb-14 z-10 transition-opacity ease-in duration-700 ${
          isVisibleContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-white font-semibold text-3xl md:text-8xl">
          Nossa missão é reduzir a pobreza menstrual em Recife!
        </h1>
        <div className="w-full md:h-20 px-11 pt-9 md:px-0 md:pr-96 md:cursor-pointer">
          <div className="w-full h-full flex md:flex md:w-full md:h-full rounded-3xl bg-white items-center md:justify-center md:items-center md:text-center md:cursor-pointer">
            <a
              className="w-full text-clRed font-semibold text-lg "
              href="#Project"
            >
              Conheça o projeto
            </a>
          </div>
        </div>
      </div>
      <div
        ref={refImage}
        className={`h-full w-full z-10 transition-opacity ease-in duration-700 ${
          isVisibleImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={hands}
          className="w-full h-full object-fill absolute md:hidden"
        ></img>
        <img
          src={landingHands}
          className="object-fill absolute right-0 bottom-0 hidden md:block"
        ></img>
      </div>
    </div>
  );
};
export default Home;
