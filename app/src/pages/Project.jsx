import pad from "../assets/pad.png";
const Project = () => {
  return (
    <div className="flex flex-col text-center items-center" id="Project">
      <h1 className="text-3xl font-medium text-clRed pt-20">Nosso Projeto</h1>
      <div className="px-10">
        <p className="pt-8 text-base font-normal">
          Ciclo Livre é um projeto de extensão financiado por doações, com o
          objetivo de combater a pobreza menstrual e o estigma em relação à
          menstruação.
        </p>
        <p className="pt-8 text-base font-normal">
          Nossa atuação está focada na doação de kits de saúde menstrual a
          pessoas em situação de vulnerabilidade, bem como na divulgação de
          dados e informações a respeito do tema, visando educar e gerar
          conscientização em relação aos impactos sociais e econômicos
          associados à pobreza menstrual.
        </p>
      </div>
      <div className="py-12">
        <img src={pad} className="h-60 w-36"></img>
      </div>
    </div>
  );
};

export default Project;
