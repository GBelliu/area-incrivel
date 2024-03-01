import { ReactNode } from "react";

import { Container, Content } from "./styles";

interface SobreProps {
  children: ReactNode;
}

export function Sobre() {
  return (
    <Container>
      <Content>
        <h1>Por que a Área Incrível?</h1>
      </Content>
    </Container>
  );
}
