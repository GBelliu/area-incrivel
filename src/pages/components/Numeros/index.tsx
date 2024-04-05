import { ReactNode } from "react";

import { Container, Content, ContentDados } from "./styles";
import { CardDados } from "../elements/CardDados";
import { Boxes, HeartHandshake, Home, LandPlot } from "lucide-react";

export function Numeros() {
  return (
    <Container>
      <Content>
        <ContentDados>
          <CardDados
            data="105 a 152 m²"
            title="ÁREA TERRENO"
            icon={<LandPlot color="#fff" strokeWidth={2} size={90} />}
          />
          <CardDados
            data="43 a 70 m²"
            title="ÁREA CONSTRUÍDA"
            icon={<Home color="#fff" strokeWidth={2} size={90} />}
          />
          <CardDados
            data="36"
            title="UNIDADES"
            icon={<Boxes color="#fff" strokeWidth={2} size={90} />}
          />
          <CardDados
            data="Recanto Paraíso"
            title="LOCALIZAÇÃO"
            icon={<HeartHandshake color="#fff" strokeWidth={2} size={90} />}
          />
        </ContentDados>
      </Content>
    </Container>
  );
}
