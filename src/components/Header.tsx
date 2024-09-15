import { Link } from "react-router-dom";
import logo from "../assets/logo/dailymusic.svg";
import { SunIcon } from "@heroicons/react/16/solid";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-4 left-[50%] tranform translate-x-[-50%] bg-white/20 backdrop-blur-[40px] flex justify-between items-center w-[1440px] rounded-full h-14 px-8 py-2">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-6">
          <picture>
            <source type="image/xml+svg" srcSet={logo} />
            <img src={logo} alt="logo do dailymusic" className="w-36" />
          </picture>

          <nav>
            <ul className="flex justify-center items-center gap-4">
              <li className="antialiased text-white font-inter font-normal text-lg hover:text-malibu-300 transition-all duration-200 ease-in-out">
                <Link to={`/`} className="no-underline">
                  Início
                </Link>
              </li>
              <li className="antialiased text-white font-inter font-normal text-lg hover:text-malibu-300 transition-all duration-200 ease-in-out">
                <Link to={`/`} className="no-underline">
                  Sobre
                </Link>
              </li>
              <li className="antialiased text-white font-inter font-normal text-lg hover:text-malibu-300 transition-all duration-200 ease-in-out">
                <Link to={`/`} className="no-underline">
                  Gêneros
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button
            type="button"
            title="Clique para alterar o tema da página."
            className="text-malibu-100 fill-malibu-100 p-1"
          >
            <SunIcon className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </header>
  );
}
