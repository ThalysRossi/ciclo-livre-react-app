import { useRef } from "react";
import avatarIcon from "../assets/avatar.png";
import { useIsVisible } from "../hooks/UseIsVisible";

const Testimonies = () => {
  const refH1 = useRef();
  const isVisibleH1 = useIsVisible(refH1);

  const refCard1 = useRef();
  const isVisibleCard1 = useIsVisible(refCard1);

  const refCard2 = useRef();
  const isVisibleCard2 = useIsVisible(refCard2);

  const refCard3 = useRef();
  const isVisibleCard3 = useIsVisible(refCard3);

  const refCard4 = useRef();
  const isVisibleCard4 = useIsVisible(refCard4);

  const refCard5 = useRef();
  const isVisibleCard5 = useIsVisible(refCard5);

  const refCard6 = useRef();
  const isVisibleCard6 = useIsVisible(refCard6);

  return (
    <div
      className="flex flex-col bg-clPink w-full text-center items-center gap-10 pb-16"
      id="Testimonies"
    >
      <h1
        className={`text-clRed text-3xl font-semibold pt-12 transition-opacity ease-in duration-700 ${
          isVisibleH1 ? "opacity-100" : "opacity-0"
        }`}
        ref={refH1}
      >
        Alguns depoimentos que coletamos ao longo da jornada!
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:max-w-7xl px-8 gap-7">
        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64  md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard1 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard1}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Eliana, 18 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              "Nos postos que distribuem preservativos, também poderiam
              distribuir absorventes, né? Os homens são protegidos de tudo,
              enquanto todo mês nós passamos o vexame de usar panos para se
              limpar” (...)
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64 md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard2 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard2}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Gabriela, 21 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              "Conseguir tomar banho é raridade pra gente, então imagina como é
              a nossa higiene na menstruação! Pra quem passa fome, quando que
              vai sobrar dinheiro pra absorvente?!" (...)
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64 md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard3 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard3}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Lavínea, 23 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              “A primeira vez que meu pai teve condições de comprar um
              absorvente pra mim, foi quando tinha 17 anos, ou seja, 4 anos
              depois do início do meu ciclo menstrual.” (...)
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64 md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard4 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard4}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Jade, 20 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              “Menstruei quando eu estava no primeiro ano do ensino médio. Me
              desesperei, pois mesmo já tendo quase 18 anos, não vim de uma
              família aberta à esse tipo de diálogo.”(...)
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64 md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard5 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard5}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Sandra, 18 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              “Meus pais não têm dinheiro para comprar absorventes, dependo de
              doações que nem sempre são efetivas. Então, por não ter fácil
              acesso, acabo recorrendo à métodos não indicados.” (...)
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:max-w-xl md:max-h-64 md:justify-center items-center border-2 border-clParadisePink rounded-2xl transition-opacity ease-in duration-700 ${
            isVisibleCard6 ? "opacity-100" : "opacity-0"
          }`}
          ref={refCard6}
        >
          <img
            className="pt-14 px-24 md:px-5 md:pt-10 pb-8"
            src={avatarIcon}
          ></img>
          <div className="md:flex md:flex-col md:pt-10">
            <h2 className="text-clParadisePink font-bold text-xl pb-4">
              Clara, 17 anos
            </h2>
            <p className="italic font-light text-sm px-7 pb-16">
              (...) “Se eu economizo, consigo comprar absorventes, mas nem
              sempre ou não suficiente. Então acabo tendo que faltar nos dias em
              que, por não ter um absorvente, não consigo manter minha higiene
              fora de casa.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
