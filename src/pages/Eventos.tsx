import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import pericles from "../assets/events/pericles.png";
import sollares from "../assets/events/sollares.png";
import ixquece from "../assets/events/ixquece.png";
import apoena from "../assets/events/apoena.png";
import club from "../assets/events/club.png";
import rockthemountain from "../assets/events/rockthemountain.png";
import baile from "../assets/events/baile.png";

export default function Eventos() {
  const eventos = [
    {
      id: 1,
      nome: "PÉRICLES - 04/10/2024",
      loc: "Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do Sul",
      image: pericles,
      alt: "Capa de Péricles",
      link: "https://bileto.sympla.com.br/event/87722/d/220492?_gl=1*19bkbmp*_gcl_au*MTc1MjgyMTQzOC4xNzI3MzIwMTQ4*_ga*MjMwODg3MjI0LjE3MjczMjAxNDg.*_ga_KXH10SQTZF*MTcyNzU1ODc5NS4zLjEuMTcyNzU1ODk3OS4xMi4wLjIwNjQ0ODU1MjU.",
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
    {
      id: 5,
      nome: "CLUB #PlayTheGame",
      loc: "Contexto Bar e Restaurante, Brasília - DF",
      image: club,
      alt: "Capa do CLUB #PlayTheGame",
      link: "https://www.sympla.com.br/evento/club-playthegame/2651226",
    },
    {
      id: 6,
      nome: "Rock the Mountain 2024",
      loc: "Parque Municipal Prefeito Paulo Rattes, Petrópolis - RJ",
      image: rockthemountain,
      alt: "Capa do Rock the Mountain 2024",
      link: "https://www.sympla.com.br/evento/rock-the-mountain-2024-noite-de-abertura-1-final-de-semana/2624101",
    },
    {
      id: 7,
      nome: "BAILE LOTADÃO c/ DJ GBR & VICTOR LOU",
      loc: "Arena BRB Mané Garrincha, Brasília - DF",
      image: baile,
      alt: "Capa do BAILE LOTADÃO c/ DJ GBR & VICTOR LOU",
      link: "https://www.sympla.com.br/evento/baile-lotadao-c-dj-gbr-victor-lou/2637961",
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
