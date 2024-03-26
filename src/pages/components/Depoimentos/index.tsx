import { ReactNode } from "react";

import { Button, Cards, Container, Content } from "./styles";
import { CardPontos } from "../elements/CardPontos";
import { Home } from "lucide-react";
import { CardDepoimentos } from "../elements/CardDepoimentos";
import { useTheme } from "../../ThemeContext";
import { depoimentos } from "./depoimentos";

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
              imgDepoimento={item.img}
              subDepoimento={item.sub}
            />
          ))}
        </Cards>
        <Button theme={theme}>Quero conhecer quem já comprou</Button>
      </Content>
    </Container>
  );
}
