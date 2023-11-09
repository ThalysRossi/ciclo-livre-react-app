import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex sticky inset-x-0 top-0 w-full h-28 md:h-[12%] items-center bg-white">
      <div className="px-3 md:px-[20%] w-full inline-flex items-center justify-between">
        <img src={logo} className="h-10 w-32" />

        <ul className="inline-flex gap-6 justify-between">
          <li>
            <a href="#Home">
              <span className="text-clRed underline hover:font-semibold focus:outline-1">
                Início
              </span>
            </a>
          </li>
          <li>
            <a>
              <span className=" hover:font-semibold focus:outline-1">
                Como atuamos
              </span>
            </a>
          </li>
          <li>
            <a>Impactos</a>
          </li>
          <li>
            <a>Depoimentos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
