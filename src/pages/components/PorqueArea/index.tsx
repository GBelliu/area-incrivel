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
        <p>
          A <span>Área Incrível</span> é uma empresa do Grupo MNGT Brasil, que
          há mais de 30 anos investe em Rio Claro e sua comunidade apoiando o
          potencial do município e participando de seu crescimento e
          desenvolvimento econômico, social e cultural.
        </p>
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
