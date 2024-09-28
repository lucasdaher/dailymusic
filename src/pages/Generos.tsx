import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Generos() {
  const generos = [
    {
      id: 1,
      title: "Pop",
      desc: "O Pop, com suas melodias contagiantes e letras acessíveis, reina supremo como o gênero mais popular, abrangendo uma ampla gama de estilos e artistas. Suas raízes remontam à música popular do século XX.",
    },
    {
      id: 2,
      title: "Hip-Hop",
      desc: "O Hip-Hop, nascido nos guetos de Nova York nos anos 70, conquistou o mundo com suas batidas poderosas, rimas habilidosas e mensagens socialmente conscientes. Sua influência se estende além da música, impactando a moda, a dança e a cultura popular em geral.",
    },
    {
      id: 3,
      title: "Música Latina",
      desc: "A Música Latina, com sua energia vibrante e ritmos contagiantes, conquistou um público global nos últimos anos. Impulsionada por artistas como Bad Bunny e J Balvin, a música latina transcende fronteiras linguísticas e culturais, celebrando a diversidade e a paixão da cultura latino-americana.",
    },
    {
      id: 4,
      title: "Música Eletrônica",
      desc: "A Música Eletrônica, com sua ampla gama de subgêneros e estilos, oferece uma experiência sonora futurista e inovadora. Desde a energia pulsante da EDM até as batidas minimalistas do techno, a música eletrônica continua a evoluir e a desafiar os limites da criatividade musical.",
    },
    {
      id: 5,
      title: "Rock",
      desc: "O Rock, com suas guitarras distorcidas, bateria potente e atitude rebelde, continua a ser um gênero musical influente e popular, mesmo após décadas de sua origem. Desde o rock clássico dos anos 60 e 70 até o rock alternativo e o heavy metal, o rock oferece uma ampla gama de estilos e expressões musicais.",
    },
  ];
  return (
    <React.Fragment>
      <Header />

      <main className="mt-32 max-w-[1440px] w-full mx-auto mb-32">
        <div className="flex flex-col justify-center items-center gap-2 w-full h-96 background-presentation rounded-lg">
          <h2 className="text-white font-semibold text-4xl">
            Gêneros musicais mais famosos
          </h2>
          <p className="text-white/60 font-normal text-xl">
            Veja algumas informações sobre os 5 gêneros mais escutados no mundo
            atualmente.
          </p>
          <Link
            to={`/`}
            className="text-white text-xl font-medium mt-6 hover:text-malibu-600 transition-all duration-200"
          >
            Clique aqui para voltar ao início
          </Link>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center gap-16">
          {generos.map((genero) => (
            <div
              className="flex flex-col justify-center items-start gap-4"
              key={genero.id}
            >
              <h1 className="text-8xl font-bold text-white">{genero.title}</h1>
              <p className="text-xl font-normal text-white/60">{genero.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
