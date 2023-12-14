import { useRef } from "react";
import layer from "../assets/Layer_1.png";
import { useIsVisible } from "../hooks/UseIsVisible";

const Activities = () => {
  const refH1 = useRef();
  const isVisibleH1 = useIsVisible(refH1);

  const refContent = useRef();
  const isVisibleContent = useIsVisible(refContent);

  return (
    <div
      className="flex flex-col bg-clRed w-full text-center px-20 md:px-[500px] md:py-20 overflow-hidden relative"
      id="Activities"
    >
      <img
        src={layer}
        className="w-full h-full object-cover mix-blend-overlay absolute"
      ></img>
      <div
        className={`pt-28 divide-y-2 md:px-32 divide transition-opacity ease-in duration-700 ${
          isVisibleH1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refH1}
      >
        <h1 className="text-white text-3xl md:text-7xl pb-5">Como atuamos?</h1>
        <h2 className="text-white text-sm md:text-3xl pt-5">
          Conscientização e Democratização:
        </h2>
      </div>
      <p
        className={`text-white md:text-2xl font-normal pt-10 pb-28 transition-opacity ease-in duration-700 ${
          isVisibleContent ? "opacity-100" : "opacity-0"
        }`}
        ref={refContent}
      >
        Em busca da democratização do conhecimento, através de ações, queremos
        conscientizar e dispersar informações sobre menstruação, corpo e
        higiene.
      </p>
    </div>
  );
};

export default Activities;
