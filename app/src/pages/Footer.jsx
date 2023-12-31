import logo from "../assets/logo-larger.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-11">
      <img className="pb-8 " src={logo}></img>
      <div className="flex flex-wrap justify-between pb-9 md:max-w-md">
        <a href="#Home" className="text-sm font-normal pr-28 md:pr-6">
          Início
        </a>
        <a href="#Impacts" className="text-sm font-normal md:pr-6">
          Impactos
        </a>
        <a href="#Activities" className="text-sm font-normal md:pr-6">
          Como Atuamos?
        </a>
        <a href="#Testimonies" className="text-sm font-normal">
          Depoimentos
        </a>
      </div>
      <p className="text-center">
        © 2023 Ciclo Livre | Termos de Uso | Política de Privacidade
      </p>
    </div>
  );
};

export default Footer;
