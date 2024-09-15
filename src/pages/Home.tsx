import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <section className="background-presentation border-b border-white/20 w-full h-[556px] flex flex-col justify-center items-center gap-2">
          <h1 className="text-white text-6xl font-inter font-semibold w-auto max-w-[96rem] text-center tracking-title antialiased ">
            Viva a trilha sonora da vida: Dia Internacional da Música!
          </h1>
          <p className="text-malibu-300 font-inter text-xl font-medium w-auto max-w-[64rem] text-center tracking-normal antialiased ">
            Explore o universo da música neste Dia Internacional! Descubra
            curiosidades, histórias inspiradoras e celebre a força
            transformadora da música em nossas vidas.
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}
