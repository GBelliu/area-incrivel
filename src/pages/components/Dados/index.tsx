import { ReactNode } from "react";

import { Container, Content } from "./styles";
import { CardDados } from "../elements/CardDados";
import { Home } from "lucide-react";

export function Dados() {
  return (
    <Container>
      <Content>
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
      </Content>
    </Container>
  );
}
