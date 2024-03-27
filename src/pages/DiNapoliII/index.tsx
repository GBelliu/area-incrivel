import { ReactNode } from "react";

import { Container } from "./styles";

import { Footer } from "../../components/Footer";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { ThemeProvider } from "../ThemeContext";

import { Apresentacao } from "../components/Apresentacao";
import { VejaMais } from "../components/VejaMais";
import { Estagio } from "../components/Estagio";
import { Header } from "../components/Header";
import { Explore } from "../components/3D";
import { Numeros } from "../components/Numeros";
import { Ofertas } from "../components/Ofertas";
import { PontosDeInteresse } from "../components/PontosDeInteresse";
import { Redes } from "../components/Redes";
import { Depoimentos } from "../components/Depoimentos";
import { Imagens } from "../components/Imagens";
import { Garantia } from "../components/Garantia";
import { EA } from "../components/EA";
import { PorqueArea } from "../components/PorqueArea";
import { Empresas } from "../../components/Empresas";
import { SobreArea } from "../components/SobreArea";

export function DiNapoliII() {
  const dataPhase = [
    {
      name: "Terraplanagem",
      value: 100,
    },
    {
      name: "Fundação",
      value: 100,
    },
    {
      name: "Alvenaria",
      value: 75,
    },
    {
      name: "Acabamento",
      value: 20,
    },
  ];

  const empreendimento = "Di Napoli II";
  return (
    <ThemeProvider page="dinapoli2">
      <Container>
        <Header />
        <Hero
          category="lançamento"
          image="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492175/public/dinapoli1img_utx995.png"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Casas de 2 ou 3 quartos"
          value="1.030,00"
          facebook=""
          instagram=""
          whatsapp=""
          buttonLink=""
        />
        <Numeros />
        <Sobre
          logoEmpreendimento="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492231/public/logodinapoli1_wapdvq.png"
          about="Bem-vindo ao Di Napoli II, onde a inovação e o conforto se unem para criar um ambiente excepcional para você e sua família. Inspirado no nome da terceira maior cidade italiana, Napoli, que significa 'cidade nova', nosso condomínio de casas térreas é a representação perfeita de qualidade e modernidade."
        />

        <Apresentacao
          iframe={
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/-2bUkkL6CX8"
              title="Apresentação do Centro Logístico Rio Claro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          }
          empreendimento={empreendimento}
        />
        <Ofertas empreendimento="dinapoli1" />
        {/* <ExplicacaoCasas/> */}
        <Empresas />
        <Estagio percentageTotal={50} listItems={dataPhase} />
        <Garantia />

        <Depoimentos empreendimento="dinapoli2" />
        <Imagens empreendimento="dinapoli1" />
        <PontosDeInteresse
          empreendimento="Di Napoli II"
          empreendimentoPonto="dinapoli1"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="dinapoli1"
        />

        <EA />
        <SobreArea />

        <Redes instagram="" facebook="" />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
