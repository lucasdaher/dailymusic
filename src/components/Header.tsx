import { Link } from "react-router-dom";
import dailymusicLogo from "../assets/dailyMusicLogo.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-50 flex justify-center items-center w-full h-14 py-[0.625rem] px-[3.75rem] bg-black/50 backdrop-blur-[20px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between items-center gap-9">
          <Link to={`/`} className="no-underline">
            <picture>
              <source type="image/xml+svg" srcSet={dailymusicLogo} />
              <img src={dailymusicLogo} alt="Logo do DailyMusic" />
            </picture>
          </Link>

          <nav>
            <ul className="flex justify-center items-center gap-4">
              <li className="text-white/70 font-inter hover:text-white transition-all duration-200 antialiased">
                <Link to={`/descubra`}>Descubra</Link>
              </li>
              <li className="text-white/70 font-inter hover:text-white transition-all duration-200 antialiased">
                <Link to={`/generos`}>Gêneros</Link>
              </li>
              <li className="text-white/70 font-inter hover:text-white transition-all duration-200 antialiased">
                <Link to={`/eventos`}>Eventos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
