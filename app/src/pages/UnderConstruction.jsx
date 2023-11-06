import layer from "../assets/Layer_1.png";
import logo from "../assets/logo.svg";

const UnderConstruction = () => {
  return (
    <div
      className="flex overflow-hidden h-full w-full bg-clRed absolute"
      id="UnderConstruction"
    >
      <img
        src={layer}
        className="w-full h-full object-cover absolute mix-blend-overlay"
      ></img>
      <div className="flex h-full w-full justify-center mt-[15%]">
        <div className="flex flex-col items-center gap-28">
          <img
            src={logo}
            className="rounded-full bg-white h-32 w-64 opacity-70"
          />
          <h1 className="text-white font-bold text-3xl md:text-7xl">
            Estamos em construção!
          </h1>
        </div>
      </div>
    </div>
  );
};
export default UnderConstruction;
