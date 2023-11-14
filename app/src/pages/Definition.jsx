import Modal from "../components/Dialog";
import feet from "../assets/image 6.png";
import group from "../assets/image 7.png";
import firstBalloon from "../assets/OBJECTS 4.png";
import secondBalloon from "../assets/OBJECTS 5.png";
import thirdBalloon from "../assets/OBJECTS 6.png";

const Definition = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center px-10 pb-16">
        <h1 className="text-clRed text-3xl font-semibold pt-12">
          Afinal, o que é pobreza menstrual?
        </h1>
        <p className="text-[#0C0C0C] text-xs pt-8 font-normal">
          A pobreza menstrual é a falta de acesso a produtos, educação ou
          infraestrutura adequada para manejo da higiene íntima.
        </p>
        <div className="pt-6">
          <Modal />
        </div>
        <img src={feet} className="pt-16"></img>
        <h1 className="text-clRed text-3xl font-semibold pt-16">
          E por que nós precisamos combatê-la?
        </h1>
        <ul className="text-left list-item list-disc pt-5 pb-10">
          <li>
            Pela saúde e educação de mulheres, meninas e todas as pessoas que
            menstruam;
          </li>
          <li>Pelos direitos humanos;</li>
          <li>Pelos direitos sexuais e reprodutivos;</li>
          <li>Pelo desenvolvimento econômico;</li>
          <li>Pela igualdade de gênero.</li>
        </ul>
        <img src={group}></img>
      </div>
      <div className="flex flex-col bg-clPink w-full text-center items-center gap-10 pb-16">
        <h1 className="text-clRed text-3xl font-semibold pt-12">
          Além disso...
        </h1>
        <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-20">
          <img src={firstBalloon}></img>
          <img src={secondBalloon}></img>
          <img src={thirdBalloon}></img>
        </div>
      </div>
    </>
  );
};

export default Definition;
