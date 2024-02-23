import { ReactNode } from "react";

import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src="./background.mp4" type="video/mp4" />
      </video>
      <h1>Área Incrível</h1>

      <h2>Viver pode ser uma experiência incrível</h2>
    </Container>
  );
}
