import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Numeros } from "./components/Numeros";
import { Apresentacao } from "./components/Apresentacao";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <Apresentacao />
    </main>
  );
}

export default App;
