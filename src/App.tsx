import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Numeros } from "./components/Numeros";
import { Apresentacao } from "./components/Apresentacao";
import { Casas } from "./components/Casas";
import { Redes } from "./components/Redes";
import { Depoimentos } from "./components/Depoimentos";
import { Sobre } from "./components/Sobre";
import { Garantia } from "./components/Garantia";
import { GrupoMNGT } from "./components/GrupoMNGT";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <Apresentacao />
      <Casas />
      <Redes />
      <Depoimentos />
      <Sobre />
      <Garantia />
      <GrupoMNGT />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
