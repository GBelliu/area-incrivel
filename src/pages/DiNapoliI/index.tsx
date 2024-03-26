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
import { Helmet } from "react-helmet";
export function DiNapoliI() {
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

  const empreendimento = "Di Napoli I";
  return (
    <ThemeProvider page="dinapoli1">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Residencial Di Napoli I</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          image="fachadadn1.jpg"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Casas de 2 ou 3 quartos"
          value="1.030,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/dinapoli_residencial/"
          whatsapp=""
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
        />
        <Numeros />
        <Sobre
          logoEmpreendimento="logodinapoli1.png"
          about="Bem-vindo ao Di Napoli I, onde a inovação e o conforto se unem para criar um ambiente excepcional para você e sua família. Inspirado no nome da terceira maior cidade italiana, Napoli, que significa 'cidade nova', nosso condomínio de casas térreas é a representação perfeita de qualidade e modernidade."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
        />

        {/* <Apresentacao
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
        /> */}
        <Ofertas
          empreendimento="dinapoli1"
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
          background="/fachadadn1.jpg"
        />
        {/* <ExplicacaoCasas/> */}
        <Empresas />
        <Estagio percentageTotal={50} listItems={dataPhase} />
        <Garantia />

        <Depoimentos empreendimento="dinapoli1" />
        <Imagens empreendimento="dinapoli1" />
        <PontosDeInteresse
          empreendimento="Di Napoli I"
          empreendimentoPonto="dinapoli1"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="dinapoli1"
        />

        <EA />
        <SobreArea />

        <Redes
          instagram="https://www.instagram.com/dinapoli_residencial/"
          facebook="https://www.facebook.com/dinapoli1.residencial"
          mockupImg="/dn1/mockupdn1.png"
        />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
