import React from "react";
import Header from "../components/Header";

export default function Home() {
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
              className="px-10 py-4 rounded-full bg-white/20 border-[0.5px] 
              border-white/40 text-2xl text-white font-medium mt-8
              hover:bg-white/60 transition-all duration-200"
            >
              Ver diferentes épocas da música
            </button>
          </a>
        </div>
      </main>

      <section id="historia"></section>
    </React.Fragment>
  );
}
