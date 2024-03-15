import { ReactNode } from "react";

import { Button, Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import { Home } from "lucide-react";
import { useTheme } from "../../ThemeContext";

interface VejaMaisProps {
  empreendimento: string;
}

export function VejaMais({ empreendimento }: VejaMaisProps) {
  const theme = useTheme();
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
        <Button theme={theme}>
          Quero receber uma simulação de financiamento
        </Button>
      </Content>
    </Container>
  );
}
