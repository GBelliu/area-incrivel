import { ReactNode } from "react";

import { Button, Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import {
  BedDouble,
  Home,
  LandPlot,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { itensVejaMais } from "./items";
interface VejaMaisProps {
  empreendimento: string;
  empreendimentoItens: string;
}

export function VejaMais({
  empreendimento,
  empreendimentoItens,
}: VejaMaisProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <h1>
          Veja mais sobre o <span>{empreendimento}</span>
        </h1>
        <Cards>
          {itensVejaMais?.[empreendimentoItens].map((item: any) => {
            return <CardPontos icon={item.icon} title={item.title} />;
          })}
        </Cards>
        <Button theme={theme}>
          Quero receber uma simulação de financiamento
        </Button>
      </Content>
    </Container>
  );
}
