import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import festaSaoMiguel from "../assets/events/festaSaoMiguel.png";
import sollares from "../assets/events/sollares.png";
import ixquece from "../assets/events/ixquece.png";
import apoena from "../assets/events/apoena.png";

export default function Eventos() {
  const eventos = [
    {
      id: 1,
      nome: "Festa de São Miguel Arcanjo 2024",
      loc: "Centro de Eventos do Ceará - Fortaleza",
      image: festaSaoMiguel,
      alt: "Capa de Festa de São Miguel",
      link: "",
    },
    {
      id: 2,
      nome: "Sollares Sunset - Vintage Culture",
      loc: "Centro de Convenções Salvador, Salvador - BA",
      image: sollares,
      alt: "Capa do Sollares Sunset com Vintage Culture",
      link: "https://www.sympla.com.br/evento/sollares-sunset-vintage-culture/2620100",
    },
    {
      id: 3,
      nome: "Ixquece | Carnaval 2025",
      loc: "Espaço Galeria Jardim, Rio de Janeiro - RJ",
      image: ixquece,
      alt: "Capa da festa de carnaval Ixquece",
      link: "https://www.sympla.com.br/evento/ixquece-l-carnaval-2025/2633645",
    },
    {
      id: 4,
      nome: "3º Festival Apoena - A Música da Floresta",
      loc: "Nabêra Gastronomia e Cultura, Belém - PA",
      image: apoena,
      alt: "Capa do 3º Festival Apoena - A Música da Floresta",
      link: "https://www.sympla.com.br/evento/3-festival-apoena-a-musica-da-floresta/2588999",
    },
  ];
  return (
    <React.Fragment>
      <Header />

      <main className="mt-32 max-w-[1440px] w-full mx-auto mb-32">
        <div className="flex flex-col justify-center items-center gap-2 w-full h-96 background-presentation rounded-lg">
          <h2 className="text-white font-semibold text-4xl">
            Eventos musicais que acontecerão no Brasil
          </h2>
          <p className="text-white/60 font-normal text-xl">
            Selecionamos alguns eventos que estão agendados para acontecer neste
            e no próximo ano.
          </p>
          <Link
            to={`/`}
            className="text-white text-xl font-medium mt-6 hover:text-malibu-600 transition-all duration-200"
          >
            Clique aqui para voltar ao início
          </Link>
        </div>

        <div className="grid grid-cols-3 justify-center content-center gap-y-8 mt-12">
          {eventos.map((evento) => (
            <a href={evento.link} target="_blank" rel="noopener noreferrer">
              <div
                className="flex flex-col justify-center items-start gap-4 p-8 hover:bg-malibu-100/10 transition-all duration-200 rounded-lg"
                key={evento.id}
              >
                <picture>
                  <source type="image/png+xml" srcSet={evento.image} />
                  <img
                    src={evento.image}
                    alt={evento.alt}
                    className="rounded-2xl w-full"
                  />
                </picture>

                <div className="flex flex-col justify-center items-start gap-1">
                  <h4 className="text-white font-bold text-xl">
                    {evento.nome}
                  </h4>
                  <p className="text-white/60 font-normal">{evento.loc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
