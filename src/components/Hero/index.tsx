import { ReactNode } from "react";

import {
  ArrowBottom,
  ButtonHero,
  Container,
  Content,
  ContentText,
} from "./styles";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <Container id="home">
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/duv6mjghr/video/upload/v1711492245/public/backgroundai_ees96e.mp4"
          type="video/mp4"
        />
      </video>
      <Content>
        <ContentText>
          <h1>Realize o sonho de viver em um lugar especial</h1>

          <h2>Conheça nossos empreendimentos disponíveis</h2>
          <Link
            to="empreendimentos"
            href="/"
            smooth={true}
            duration={1500}
            offset={-100}
          >
            <ButtonHero>Quero conhecer os empreendimentos</ButtonHero>
          </Link>
        </ContentText>
        <Link
          to="apresentacao"
          href="/"
          smooth={true}
          duration={1500}
          offset={-100}
        >
          <ArrowBottom>
            <span>CLIQUE E ASSISTA SOBRE NOSSA HISTÓRIA</span>
            <ChevronDown size={40} color="#FFFFFF" />
          </ArrowBottom>
        </Link>
      </Content>
    </Container>
  );
}
