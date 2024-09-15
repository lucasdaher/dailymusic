import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <section className="background-presentation w-full h-[500px] flex flex-col justify-center items-center gap-2">
          <h1 className="text-white text-6xl font-inter font-semibold w-auto max-w-[96rem] text-center">
            Viva a trilha sonora da vida: Dia Internacional da Música!
          </h1>
          <p className="text-malibu-300 font-inter text-2xl font-medium w-auto max-w-[96rem] text-center">
            "Explore o universo da música neste Dia Internacional! Descubra
            curiosidades, histórias inspiradoras e celebre a força
            transformadora da música em nossas vidas."
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}
