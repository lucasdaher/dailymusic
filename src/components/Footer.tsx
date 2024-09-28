import dailymusiclogo from "../assets/dailyMusicLogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-[20px] px-14 py-14 flex flex-col justify-center items-center gap-6">
      <img src={dailymusiclogo} alt="dailymusic Logo" />
      <p className="text-white/70 text-base">
        Desenvolvido por Lucas Daher para a matéria de desenvolvimento
        front-end. &copy;
      </p>

      <nav className="mt-6">
        <ul className="flex justify-center items-center w-full gap-10">
          <li className="text-malibu-600/70 font-inter hover:text-malibu-300 transition-all duration-200 antialiased">
            <Link to={`/descubra`}>Descubra</Link>
          </li>
          <li className="text-malibu-600/70 font-inter hover:text-malibu-300 transition-all duration-200 antialiased">
            <Link to={`/generos`}>Gêneros</Link>
          </li>
          <li className="text-malibu-600/70 font-inter hover:text-malibu-300 transition-all duration-200 antialiased">
            <Link to={`/eventos`}>Eventos</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
