import { useRef } from "react";
import hands from "../assets/hands.svg";
import layer from "../assets/Layer_1.png";
import { useIsVisible } from "../hooks/UseIsVisible";
const Home = () => {
  const refContent = useRef();
  const isVisibleContent = useIsVisible(refContent);

  const refImage = useRef();
  const isVisibleImage = useIsVisible(refImage);
  return (
    <div
      className="flex flex-col h-[11%] w-full pt-28 relative bg-clRed items-start justify-evenly overflow-hidden"
      id="Home"
    >
      <img
        src={layer}
        className="w-full h-full object-cover mix-blend-overlay absolute"
      ></img>
      <div
        ref={refContent}
        className={`flex flex-col pt-10 px-7 text-center z-10 transition-opacity ease-in duration-700 ${
          isVisibleContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white font-semibold text-3xl">
          Nossa missão é reduzir a pobreza menstrual em Recife!
        </span>
        <div className="pt-4 px-11 items-center">
          <button
            type="button"
            className="w-full h-8 rounded-full bg-white cursor-pointer"
          >
            <span className="text-clRed font-semibold text-lg">
              Conheça o projeto
            </span>
          </button>
        </div>
      </div>
      <div
        ref={refImage}
        className={`h-full w-full md:w-3/4 md:h-3/4 z-10 transition-opacity ease-in duration-700 ${
          isVisibleImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={hands}
          className="w-full h-full object-fill absolute md:left-auto md:right-0 md:bottom-0 md:scale-x-100 md:w-3/4 md:h-3/4"
        ></img>
      </div>
    </div>
  );
};
export default Home;
