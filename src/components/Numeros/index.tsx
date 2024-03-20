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
            <h2>+20</h2>
            <p>Anos no mercado</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>5000</h2>
            <p>Casas de 48m² construídas</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} />
            <h2>300</h2>
            <p>Imóveis previstos para 2024</p>
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
