import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import festaSaoMiguel from "../assets/events/festaSaoMiguel.png";

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
      nome: "Festa de São Miguel Arcanjo 2024",
      loc: "Centro de Eventos do Ceará - Fortaleza",
      image: festaSaoMiguel,
      alt: "",
      link: "",
    },
    {
      id: 3,
      nome: "Festa de São Miguel Arcanjo 2024",
      loc: "Centro de Eventos do Ceará - Fortaleza",
      image: festaSaoMiguel,
      alt: "Capa de Festa de São Miguel",
      link: "",
    },
    {
      id: 4,
      nome: "Festa de São Miguel Arcanjo 2024",
      loc: "Centro de Eventos do Ceará - Fortaleza",
      image: festaSaoMiguel,
      alt: "Capa de Festa de São Miguel",
      link: "",
    },
  ];
  return (
    <React.Fragment>
      <Header />

      <main className="mt-32 max-w-[1440px] w-full mx-auto mb-32">
        <div className="flex flex-col justify-center items-center gap-2 w-full h-96 background-presentation rounded-lg">
          <h2 className="text-white font-semibold text-4xl">
            Eventos musicais no Brasil nos próximos dias
          </h2>
          <p className="text-white/60 font-normal text-xl">
            Selecionamos alguns eventos que irão acontecer no Brasil ao decorrer
            do mês.
          </p>
          <Link
            to={`/`}
            className="text-white text-xl font-medium mt-6 hover:text-malibu-600 transition-all duration-200"
          >
            Clique aqui para voltar ao início
          </Link>
        </div>

        <div className="grid grid-cols-3 justify-center content-center gap-8 mt-12">
          {eventos.map((evento) => (
            <a href={evento.link} target="_blank" rel="noopener noreferrer">
              <div
                className="flex flex-col justify-center items-start gap-4 p-8 hover:bg-black/20 transition-all duration-200 rounded-lg"
                key={evento.id}
              >
                <picture>
                  <source type="image/png+xml" srcSet={festaSaoMiguel} />
                  <img src={festaSaoMiguel} alt={evento.alt} />
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
