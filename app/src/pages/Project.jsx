import { useRef } from "react";
import pad from "../assets/pad.png";
import padLanding from "../assets/pad-landing.png";
import padAlt from "../assets/image 5.svg";
import { useIsVisible } from "../hooks/UseIsVisible";

const Project = () => {
  const refContent = useRef();
  const isVisibleContent = useIsVisible(refContent);

  const refH1 = useRef();
  const isVisibleH1 = useIsVisible(refH1);

  const refImage = useRef();
  const isVisibleImage = useIsVisible(refImage);

  return (
    <div
      className="flex flex-col w-full md:text-start md:items-start md:px-80 md:pb-60 text-center items-center"
      id="Project"
    >
      <h1
        className={`text-3xl md:hidden font-medium text-clRed pt-20 transition-opacity ease-in duration-700 ${
          isVisibleH1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refH1}
      >
        Nosso Projeto
      </h1>
      <h1
        className={`hidden text-9xl md:block text-clRed pt-20 transition-opacity ease-in duration-700 ${
          isVisibleH1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refH1}
      >
        <p className="font-extralight">Nosso</p>
        <p className="font-semibold">Projeto</p>
      </h1>

      <div className="flex flex-col items-center md:flex md:flex-row">
        <div
          className={`px-10 md:px-0 md:text-wrap md:w-[780px] transition-opacity ease-in duration-700 ${
            isVisibleContent ? "opacity-100" : "opacity-0"
          }`}
          ref={refContent}
        >
          <p className="pt-8 text-base md:text-2xl font-normal">
            Ciclo Livre é um projeto de extensão financiado por doações, com o
            objetivo de combater a pobreza menstrual e o estigma em relação à
            menstruação.
          </p>
          <p className="pt-8 text-base md:text-2xl font-normal">
            Nossa atuação está focada na doação de kits de saúde menstrual a
            pessoas em situação de vulnerabilidade, bem como na divulgação de
            dados e informações a respeito do tema, visando educar e gerar
            conscientização em relação aos impactos sociais e econômicos
            associados à pobreza menstrual.
          </p>
        </div>
        <div
          className={`h-60 w-36 md:flex-grow md:h-[560px] md:w-[380px] py-12 md:py-0 transition-opacity ease-in duration-700 ${
            isVisibleImage ? "opacity-100" : "opacity-0"
          }`}
          ref={refImage}
        >
          <img src={padAlt} className="w-full h-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Project;
