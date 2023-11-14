import headIcon from "../assets/head-icon.svg";
import hatIcon from "../assets/hat-icon.svg";
import bagIcon from "../assets/bag-icon.svg";
import { useRef } from "react";
import { useIsVisible } from "../hooks/UseIsVisible";

const Impacts = () => {
  const refH1 = useRef();
  const isVisibleH1 = useIsVisible(refH1);

  const refContent1 = useRef();
  const isVisibleContent1 = useIsVisible(refContent1);

  const refContent2 = useRef();
  const isVisibleContent2 = useIsVisible(refContent2);

  const refContent3 = useRef();
  const isVisibleContent3 = useIsVisible(refContent3);

  const refContent4 = useRef();
  const isVisibleContent4 = useIsVisible(refContent4);

  return (
    <div
      className="flex flex-col bg-clRed w-full text-center px-16 items-center"
      id="Impacts"
    >
      <h1
        className={`text-white font-semibold text-3xl pt-16 transition-opacity ease-in duration-700 ${
          isVisibleH1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refH1}
      >
        Impactos da Pobreza Menstrual
      </h1>
      <p
        className={`text-white text-sm pt-6 pb-8 transition-opacity ease-in duration-700 ${
          isVisibleContent1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refContent1}
      >
        Os impactos da pobreza menstrual se estendem a diversos contextos de
        desigualdade de gênero, desigualdade racial, acesso a educação e
        interseccionalidade ambiental.
      </p>

      <div
        className={`flex flex-col items-center transition-opacity ease-in duration-700 ${
          isVisibleContent2 ? "opacity-100" : "opacity-0"
        }`}
        ref={refContent2}
      >
        <img src={hatIcon} className="w-[108px] h-[117px]"></img>
        <h1 className="text-white font-semibold text-6xl pt-6">65%</h1>
        <p className="text-white text-sm pt-6 pb-4">
          das meninas em situação de pobreza menstrual são negras.
        </p>
        <p className="text-white text-sm italic pb-8">Fonte: Reuters</p>
      </div>

      <div
        className={`flex flex-col items-center transition-opacity ease-in duration-700 ${
          isVisibleContent3 ? "opacity-100" : "opacity-0"
        }`}
        ref={refContent3}
      >
        <img src={headIcon} className="w-[108px] h-[117px]"></img>
        <h1 className="text-white font-semibold text-6xl pt-6">25%</h1>
        <p className="text-white text-sm pt-6 pb-4">
          das meninas já faltaram à escola por estarem menstruadas.
        </p>
        <p className="text-white text-sm italic pb-8"> Fonte: Globo</p>
      </div>

      <div
        className={`flex flex-col items-center transition-opacity ease-in duration-700 ${
          isVisibleContent4 ? "opacity-100" : "opacity-0"
        }`}
        ref={refContent4}
      >
        <img src={bagIcon} className="w-[108px] h-[117px]"></img>
        <h1 className="text-white font-semibold text-6xl pt-6">+3mi</h1>
        <p className="text-white text-sm pt-6 pb-4">
          de meninas brasileiras moram em casa em que não há coleta de lixo por
          serviço de limpeza.
        </p>
        <p className="text-white text-sm italic pb-8">Fonte: UNICEF</p>
      </div>
    </div>
  );
};

export default Impacts;
