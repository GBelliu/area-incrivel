import { ReactNode, useEffect } from "react";

import { Container, Content, ContentNumeros, ItemNumeros } from "./styles";
import { CalendarCheck, HeartHandshake, Home, LandPlot } from "lucide-react";

export function Numeros() {
  return (
    <Container id="numeros">
      <Content>
        <h1>Nossos números</h1>
        <ContentNumeros>
          <ItemNumeros>
            <CalendarCheck color="#030303" strokeWidth={2.25} size={90} />
            <h2>+20</h2>
            <p>Anos no mercado</p>
          </ItemNumeros>
          <ItemNumeros>
            <LandPlot color="#030303" strokeWidth={2.25} size={90} />

            <h2>5000</h2>
            <p>Casas de 48m² construídas</p>
          </ItemNumeros>
          <ItemNumeros>
            <Home size={90} color="#030303" strokeWidth={2.25} />
            <h2>300</h2>
            <p>Imóveis para 2024</p>
          </ItemNumeros>
          <ItemNumeros>
            <HeartHandshake color="#030303" strokeWidth={2.25} size={90} />

            <h2>90%</h2>
            <p>Taxa de conversão</p>
          </ItemNumeros>
        </ContentNumeros>
      </Content>
    </Container>
  );
}
