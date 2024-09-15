import logo from "../assets/logo/dailymusic.svg";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="flex justify-between items-center w-full h-14">
      <div className="max-w-[1440px] mx-auto">
        <picture>
          <source type="image/xml+svg" srcSet={logo} />
          <img src={logo} alt="logo do dailymusic" className="w-40" />
        </picture>
      </div>
    </header>
  );
}
