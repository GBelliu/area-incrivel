import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Empreendimentos } from "./components/Empreendimentos";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Empreendimentos />
    </main>
  );
}

export default App;
