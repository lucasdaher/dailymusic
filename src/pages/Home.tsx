import React, { useEffect } from "react";
import Header from "../components/Header";

import illustrationInitial from "../assets/illustrations/illustrationInitial.svg";
import illustrationSecond from "../assets/illustrations/illustrationSecond.svg";
import illustrationPresent from "../assets/illustrations/illustrationPresent.svg";
import illustrationFuture from "../assets/illustrations/illustrationFuture.svg";

import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />

      <main
        className="background-presentation w-full h-[43.375rem] flex justify-center 
      items-center"
      >
        <div className="flex justify-center items-center flex-col gap-8">
          <div className="flex flex-col justify-center items-center">
            <h1
              className="antialiased text-malibu-300 text-8xl font-bold 
            tracking-[-0.195rem]"
            >
              Viva a trilha sonora da vida
            </h1>
            <h1
              className="antialiased text-malibu-300 text-8xl font-bold 
            tracking-[-0.195rem]"
            >
              Dia Internacional da Música
            </h1>
          </div>

          <p
            className="antialiased text-white/70 max-w-[62.5625rem] w-full 
          text-center font-normal text-2xl tracking-normal"
          >
            "Explore o universo da música neste Dia Internacional! Descubra
            curiosidades, histórias inspiradoras e celebre a força
            transformadora da música em nossas vidas."
          </p>

          <a href="#historia" rel="noopener noreferrer">
            <button
              type="button"
              title="Clique para conhecer a história da música."
              className="px-10 py-4 rounded-full bg-malibu-600/20 border-[0.5px] 
              border-malibu-600/40 text-2xl text-white font-medium mt-8
              hover:bg-malibu-400/60 transition-all duration-200"
            >
              Linha temporal da música
            </button>
          </a>
        </div>
      </main>

      <section
        id="historia"
        className="max-w-[1440px] mx-auto px-14 py-14 mb-36"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-white font-semibold text-4xl">
            Linha temporal da música
          </h2>
          <p className="text-white/60 font-normal text-xl">
            Conheça um pouco de todo o passado, presente e futuro da música.
          </p>
        </div>

        <div className="flex justify-between items-center mt-16">
          <img
            src={illustrationInitial}
            alt="Ilustração inicial para a apresentação da seção."
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="text-malibu-200 font-semibold text-4xl w-[44.625rem] leading-snug">
              A Música Através do Tempo: Passado, Presente e Futuro
            </h3>
            <p className="text-white/60 font-normal text-xl w-[51.625rem] leading-relaxed">
              A música é uma linguagem universal que transcende barreiras
              culturais e temporais, conectando pessoas através de emoções e
              experiências compartilhadas. Ao longo da história, a música tem
              evoluído e se adaptado, refletindo as mudanças sociais,
              tecnológicas e culturais de cada época.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-16">
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="text-malibu-200 font-semibold text-4xl w-[44.625rem] leading-snug">
              O Passado: Raízes Profundas e Ricas Tradições
            </h3>
            <p className="text-white/60 font-normal text-xl w-[51.625rem] leading-relaxed">
              A música tem suas raízes nas primeiras civilizações, com
              evidências de instrumentos musicais e cantos rituais datando de
              milhares de anos atrás. A música era parte integrante da vida
              cotidiana, servindo a propósitos religiosos, sociais e de
              entretenimento.
            </p>
          </div>
          <img
            src={illustrationSecond}
            alt="Ilustração inicial para a apresentação da seção."
          />
        </div>

        <div className="flex justify-between items-center mt-16">
          <img
            src={illustrationPresent}
            alt="Ilustração inicial para a apresentação da seção."
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="text-malibu-200 font-semibold text-4xl w-[44.625rem] leading-snug">
              O Presente: Diversidade, Tecnologia e Globalização
            </h3>
            <p className="text-white/60 font-normal text-xl w-[51.625rem] leading-relaxed">
              A música contemporânea é caracterizada por uma incrível
              diversidade de gêneros e estilos, desde o pop e o rock até o
              hip-hop, a música eletrônica e inúmeras fusões e subgêneros.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-16">
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="text-malibu-200 font-semibold text-4xl w-[44.625rem] leading-snug">
              O Futuro: Inovação, Inteligência Artificial e Novas Fronteiras
            </h3>
            <p className="text-white/60 font-normal text-xl w-[51.625rem] leading-relaxed">
              A inteligência artificial está começando a desempenhar um papel
              cada vez mais importante na criação e produção musical, com
              algoritmos capazes de gerar melodias, harmonias e até mesmo letras
              de músicas.
            </p>
          </div>
          <img
            src={illustrationFuture}
            alt="Ilustração inicial para a apresentação da seção."
          />
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}
