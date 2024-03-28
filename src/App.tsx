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
import { Empresas } from "./components/Empresas";
import ReactPixel from "react-facebook-pixel";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    ReactPixel.init("1528293361047131");

    TagManager.initialize({ gtmId: "GTM-KXPBB883" });
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      {/* <Apresentacao /> */}
      <Empreendimentos />

      <Depoimentos />

      <Empresas />
      <Redes
        facebook="https://www.facebook.com/area.incrivelrc"
        instagram="https://www.instagram.com/area.incrivel/"
      />
      {/* <PorqueArea /> */}
      <Sobre />
      {/* <Garantia /> */}
      <GrupoMNGT />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
