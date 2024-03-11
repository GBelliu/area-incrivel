import { ReactNode } from "react";

import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { ThemeProvider } from "../ThemeContext";
import { Dados } from "../components/Dados";
import { Apresentacao } from "../components/Apresentacao";
import { Pontos } from "../components/Pontos";
import { Estagio } from "../components/Estagio";

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
  return (
    <ThemeProvider page="dinapoli1">
      <Container>
        <Header />
        <Hero category="lançamento" />
        <Sobre
          logoEmpreendimento="logodinapoli1.png"
          about="Bem-vindo ao Di Napoli I, onde a inovação e o conforto se unem para criar um ambiente excepcional para você e sua família. Inspirado no nome da terceira maior cidade italiana, Napoli, que significa 'cidade nova', nosso condomínio de casas térreas é a representação perfeita de qualidade e modernidade."
        />
        <Dados />
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
        />
        <Pontos empreendimento="Di Napoli I" />
        <Estagio percentageTotal={50} listItems={dataPhase} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
