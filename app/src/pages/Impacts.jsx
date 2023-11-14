import headIcon from "../assets/head-icon.svg";
import hatIcon from "../assets/hat-icon.svg";
import bagIcon from "../assets/bag-icon.svg";

const Impacts = () => {
  return (
    <div
      className="flex flex-col bg-clRed w-full text-center px-16 items-center"
      id="Impacts"
    >
      <h1 className="text-white font-semibold text-3xl pt-16">
        Impactos da Pobreza Menstrual
      </h1>
      <p className="text-white text-sm pt-6 pb-8">
        Os impactos da pobreza menstrual se estendem a diversos contextos de
        desigualdade de gênero, desigualdade racial, acesso a educação e
        interseccionalidade ambiental.
      </p>

      <img src={hatIcon} className="w-[108px] h-[117px]"></img>
      <h1 className="text-white font-semibold text-6xl pt-6">65%</h1>
      <p className="text-white text-sm pt-6 pb-4">
        das meninas em situação de pobreza menstrual são negras.
      </p>
      <p className="text-white text-sm italic pb-8">Fonte: Reuters</p>

      <img src={headIcon} className="w-[108px] h-[117px]"></img>
      <h1 className="text-white font-semibold text-6xl pt-6">25%</h1>
      <p className="text-white text-sm pt-6 pb-4">
        das meninas já faltaram à escola por estarem menstruadas.
      </p>
      <p className="text-white text-sm italic pb-8"> Fonte: Globo</p>

      <img src={bagIcon} className="w-[108px] h-[117px]"></img>
      <h1 className="text-white font-semibold text-6xl pt-6">+3mi</h1>
      <p className="text-white text-sm pt-6 pb-4">
        de meninas brasileiras moram em casa em que não há coleta de lixo por
        serviço de limpeza.
      </p>
      <p className="text-white text-sm italic pb-8">Fonte: UNICEF</p>
    </div>
  );
};

export default Impacts;
