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
import { itensVejaMais } from "../../utils/items";

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
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
          target="_blank"
        >
          <Button theme={theme}>
            Quero receber uma simulação de financiamento
          </Button>
        </a>
      </Content>
    </Container>
  );
}
