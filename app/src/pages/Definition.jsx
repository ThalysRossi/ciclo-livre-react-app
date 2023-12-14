import Modal from "../components/Dialog";
import feet from "../assets/image 6.png";
import group from "../assets/image 7.png";
import firstBalloon from "../assets/OBJECTS 4.png";
import secondBalloon from "../assets/OBJECTS 5.png";
import thirdBalloon from "../assets/OBJECTS 6.png";
import { useRef } from "react";
import { useIsVisible } from "../hooks/UseIsVisible";

const Definition = () => {
  const refH1 = useRef();
  const isVisibleH1 = useIsVisible(refH1);

  const refH2 = useRef();
  const isVisibleH2 = useIsVisible(refH2);

  const refH3 = useRef();
  const isVisibleH3 = useIsVisible(refH3);

  const refContent1 = useRef();
  const isVisibleContent1 = useIsVisible(refContent1);

  const refImage1 = useRef();
  const isVisibleImage1 = useIsVisible(refImage1);

  const refImage2 = useRef();
  const isVisibleImage2 = useIsVisible(refImage2);

  const refList = useRef();
  const isVisibleList = useIsVisible(refList);

  const refBalloon1 = useRef();
  const isVisibleBalloon1 = useIsVisible(refBalloon1);
  const refBalloon2 = useRef();
  const isVisibleBalloon2 = useIsVisible(refBalloon2);
  const refBalloon3 = useRef();
  const isVisibleBalloon3 = useIsVisible(refBalloon3);

  return (
    <>
      <div className="flex flex-col text-center items-center px-10 pb-16">
        <div className="flex flex-col md:flex md:flex-row-reverse md:items-start">
          <div className="md:flex md:flex-col">
            <h1
              className={`text-clRed text-3xl md:text-6xl md:w-[600px] md:text-left font-semibold pt-12 transition-opacity ease-in duration-700 ${
                isVisibleH1 ? "opacity-100" : "opacity-0"
              }`}
              ref={refH1}
            >
              Afinal, o que é pobreza menstrual?
            </h1>

            <p
              className={`text-[#0C0C0C] text-xs pt-8 font-normal md:text-2xl md:text-left md:w-[600px] md:text-opacity-70 transition-opacity ease-in duration-700 ${
                isVisibleContent1 ? "opacity-100" : "opacity-0"
              }`}
              ref={refContent1}
            >
              A pobreza menstrual é a falta de acesso a produtos, educação ou
              infraestrutura adequada para manejo da higiene íntima.
            </p>

            <div
              className={`pt-6 transition-opacity ease-in duration-700 ${
                isVisibleContent1 ? "opacity-100" : "opacity-0"
              }`}
              ref={refContent1}
            >
              <Modal />
            </div>
          </div>

          <img
            src={feet}
            className={`pt-16 md:pr-52 transition-opacity ease-in duration-700 ${
              isVisibleImage1 ? "opacity-100" : "opacity-0"
            }`}
            ref={refImage1}
          ></img>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:items-start">
          <div className="md:flex md:flex-col md:w-[400px]">
            <h1
              className={`text-clRed text-3xl md:text-left md:text-6xl font-semibold pt-16 transition-opacity ease-in duration-700 ${
                isVisibleH2 ? "opacity-100" : "opacity-0"
              }`}
              ref={refH2}
            >
              E por que nós precisamos combatê-la?
            </h1>
            <ul
              className={`text-left list-item list-disc pt-5 md:pt-10 md:text-opacity-70 pb-10 transition-opacity ease-in duration-700 ${
                isVisibleList ? "opacity-100" : "opacity-0"
              }`}
              ref={refList}
            >
              <li>
                Pela saúde e educação de mulheres, meninas e todas as pessoas
                que menstruam;
              </li>
              <li>Pelos direitos humanos;</li>
              <li>Pelos direitos sexuais e reprodutivos;</li>
              <li>Pelo desenvolvimento econômico;</li>
              <li>Pela igualdade de gênero.</li>
            </ul>
          </div>

          <img
            className={`md:pl-52 md:pt-14 transition-opacity ease-in duration-700 ${
              isVisibleImage2 ? "opacity-100" : "opacity-0"
            }`}
            src={group}
            ref={refImage2}
          ></img>
        </div>
      </div>
      <div className="flex flex-col bg-clPink w-full text-center items-center gap-10 pb-16">
        <h1
          className={`text-clRed text-3xl font-semibold pt-12 transition-opacity ease-in duration-700 ${
            isVisibleH3 ? "opacity-100" : "opacity-0"
          }`}
          ref={refH3}
        >
          Além disso...
        </h1>
        <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-20">
          <img
            className={`transition-opacity ease-in duration-700 ${
              isVisibleBalloon1 ? "opacity-100" : "opacity-0"
            }`}
            src={firstBalloon}
            ref={refBalloon1}
          ></img>
          <img
            className={`transition-opacity ease-in duration-700 ${
              isVisibleBalloon2 ? "opacity-100" : "opacity-0"
            }`}
            src={secondBalloon}
            ref={refBalloon2}
          ></img>
          <img
            className={`transition-opacity ease-in duration-700 ${
              isVisibleBalloon3 ? "opacity-100" : "opacity-0"
            }`}
            src={thirdBalloon}
            ref={refBalloon3}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Definition;
