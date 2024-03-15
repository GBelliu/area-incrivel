import { ReactNode } from "react";

import { Container, Content, ContentDados } from "./styles";
import { CardDados } from "../elements/CardDados";
import { Home } from "lucide-react";

export function Numeros() {
  return (
    <Container>
      <Content>
        <h1>Nossos números</h1>

        <ContentDados>
          <CardDados
            data="105 a 152m²"
            title="ÁREA TERRENO"
            icon={<Home size={90} />}
          />
          <CardDados
            data="105 a 152m²"
            title="ÁREA TERRENO"
            icon={<Home size={90} />}
          />
          <CardDados
            data="105 a 152m²"
            title="ÁREA TERRENO"
            icon={<Home size={90} />}
          />
          <CardDados
            data="105 a 152m²"
            title="ÁREA TERRENO"
            icon={<Home size={90} />}
          />
        </ContentDados>
      </Content>
    </Container>
  );
}
