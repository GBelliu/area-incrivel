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
          <CardPorque title="Atendimento humanizado" />
          <CardPorque title="Atendimento humanizado" />
          <CardPorque title="Atendimento humanizado" />
          <CardPorque title="Atendimento humanizado" />
        </Abouts>
        <Button>Falar com um consultor incrível</Button>
      </Content>
    </Container>
  );
}
