import { ReactNode, useEffect } from "react";

import { Container, Content, ContentNumeros, ItemNumeros } from "./styles";
import { Home } from "lucide-react";

export function Numeros() {
  return (
    <Container>
      <Content>
        <h1>Nossos números</h1>
        <ContentNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>+2500</h2>
            <p>Template customizado</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>400%</h2>
            <p>Template customizado</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>400%</h2>
            <p>Template customizado</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>400%</h2>
            <p>Template customizado</p>
          </ItemNumeros>
        </ContentNumeros>
      </Content>
    </Container>
  );
}
