import { ReactNode } from "react";

import { Container, Content } from "./styles";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";

export function Casas() {
  return (
    <Container>
      <Content>
        <h1>Casas</h1>
        <CardEmpreendimento />
      </Content>
    </Container>
  );
}
