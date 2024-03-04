import { ReactNode } from "react";

import { Abouts, Container, Content } from "./styles";
import { AboutItemLeft } from "../elements/AboutItemLeft";
import { AboutItemRight } from "../elements/AboutItemRight";

interface SobreProps {
  children: ReactNode;
}

export function Sobre() {
  return (
    <Container>
      <Content>
        <h1>Por que a Área Incrível?</h1>
        <Abouts>
          <AboutItemLeft></AboutItemLeft>
          <AboutItemRight></AboutItemRight>
          <AboutItemLeft></AboutItemLeft>
          <AboutItemRight></AboutItemRight>
        </Abouts>
      </Content>
    </Container>
  );
}
