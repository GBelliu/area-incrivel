import { ReactNode } from "react";

import { Container, Content, ContentDados } from "./styles";
import { CardDados } from "../elements/CardDados";
import { Boxes, HeartHandshake, Home, LandPlot } from "lucide-react";
import { numeros } from "../../utils/numeros";
interface NumerosProps {
  empreendimentoItens: string;
}
export function Numeros({ empreendimentoItens }: NumerosProps) {
  return (
    <Container>
      <Content>
        <ContentDados>
          {numeros?.[empreendimentoItens].map((item: any) => {
            return (
              <CardDados data={item.data} title={item.title} icon={item.icon} />
            );
          })}
        </ContentDados>
      </Content>
    </Container>
  );
}
