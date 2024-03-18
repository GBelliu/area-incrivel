import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Numeros } from "./components/Numeros";
import { Apresentacao } from "./components/Apresentacao";

import { Redes } from "./components/Redes";
import { Depoimentos } from "./components/Depoimentos";
import { Sobre } from "./components/Sobre";
import { Garantia } from "./components/Garantia";
import { GrupoMNGT } from "./components/GrupoMNGT";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Empreendimentos } from "./components/Empreendimentos";
import { PorqueArea } from "./components/PorqueArea";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <Apresentacao />
      <Empreendimentos />
      <Redes />
      <Depoimentos />
      {/* <Sobre /> */}
      <PorqueArea />
      <Garantia />
      <GrupoMNGT />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
