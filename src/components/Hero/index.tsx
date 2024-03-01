import { ReactNode } from "react";

import {
  ArrowBottom,
  ButtonHero,
  Container,
  Content,
  ContentText,
} from "./styles";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <Container>
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src="./background.mp4" type="video/mp4" />
      </video>
      <Content>
        <ContentText>
          <h1>Realize o sonho de viver em um lugar especial</h1>

          <h2>Conheça nossos empreendimentos disponíveis</h2>
          <ButtonHero>Quero conhecer os empreendimentos</ButtonHero>
        </ContentText>
        <ArrowBottom>
          <span>CLIQUE E ASSISTA SOBRE NOSSA HISTÓRIA</span>
          <ChevronDown size={40} color="#FFFFFF" />
        </ArrowBottom>
      </Content>
    </Container>
  );
}
