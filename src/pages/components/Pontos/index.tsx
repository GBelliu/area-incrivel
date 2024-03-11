import { ReactNode } from "react";

import { Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import { Home } from "lucide-react";

interface PontosProps {
  empreendimento: string;
}

export function Pontos({ empreendimento }: PontosProps) {
  return (
    <Container>
      <Content>
        <h1>
          Veja mais sobre o <span>{empreendimento}</span>
        </h1>
        <Cards>
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
          <CardPontos icon={<Home size={90} />} title="Automação Residencial" />
        </Cards>
      </Content>
    </Container>
  );
}
