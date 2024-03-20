import { ReactNode } from "react";

import { Abouts, Button, Container, Content } from "./styles";
import { CardPorque } from "../elements/CardPorque";

interface PorqueAreaProps {
  children: ReactNode;
}

export function PorqueArea() {
  return (
    <Container>
      <Content>
        <h1>Por que a Área Incrível?</h1>
        <Abouts>
          <CardPorque title="Experiência comprovada" />
          <CardPorque title="Solidez financeira" />
          <CardPorque title="Equipe especializada" />
          <CardPorque title="Focada em Rio Claro" />
        </Abouts>
        <Button>Falar com um consultor incrível</Button>
      </Content>
    </Container>
  );
}
