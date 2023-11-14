import layer from "../assets/Layer_1.png";

const Activities = () => {
  return (
    <div
      className="flex flex-col bg-clRed w-full text-center px-20 overflow-hidden relative"
      id="Activities"
    >
      <img
        src={layer}
        className="w-full h-full object-cover mix-blend-overlay absolute"
      ></img>
      <div className=" pt-28 divide-y-2 divide">
        <h1 className="text-white text-3xl pb-5">Como atuamos?</h1>
        <h2 className="text-white text-sm pt-5">
          Conscientização e Democratização:
        </h2>
      </div>
      <p className="text-white pt-10 pb-28">
        Em busca da democratização do conhecimento, através de ações, queremos
        conscientizar e dispersar informações sobre menstruação, corpo e
        higiene.
      </p>
    </div>
  );
};

export default Activities;
