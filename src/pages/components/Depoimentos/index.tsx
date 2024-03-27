import { ReactNode } from "react";

import { Button, Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import { Home } from "lucide-react";
import { CardDepoimentos } from "../elements/CardDepoimentos";
import { useTheme } from "../../ThemeContext";
import { depoimentos } from "../../utils/depoimentos";

interface DepoimentosProps {
  empreendimento: string;
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
          {depoimentos?.[empreendimento]?.map((item: any) => (
            <CardDepoimentos
              text={item.text}
              nameDepoimento={item.name}
              subDepoimento={item.sub}
              iframe={item.iframe}
            />
          ))}
        </Cards>
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
          target="_blank"
        >
          <Button theme={theme}>Quero conhecer quem já comprou</Button>
        </a>
      </Content>
    </Container>
  );
}
