import { ReactNode } from "react";

import { Button, Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import { Home } from "lucide-react";
import { CardDepoimentos } from "../elements/CardDepoimentos";
import { useTheme } from "../../ThemeContext";

interface DepoimentosProps {
  empreendimento?: string;
}

export function Depoimentos({ empreendimento }: DepoimentosProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content theme={theme}>
        <h1>
          Depoimentos dos <span>futuros vizinhos</span>
        </h1>
        <Cards>
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
          <CardDepoimentos
            text="Profissionais muito capacitados e sempre em busca de melhor atender seus clientes."
            nameDepoimento="Teste"
            subDepoimento="testinho"
            imgDepoimento="perfilteste.png"
          />
        </Cards>
        <Button theme={theme}>Quero conhecer quem já comprou</Button>
      </Content>
    </Container>
  );
}
