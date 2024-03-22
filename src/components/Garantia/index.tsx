import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentGarantia,
  LeftContent,
  RightContent,
  Security,
  Text,
} from "./styles";

export function Garantia() {
  return (
    <Container id="garantia">
      <Content>
        <h1>Garantia de entrega</h1>
        <ContentGarantia>
          <LeftContent></LeftContent>
          <RightContent>
            <Text>
              <p>
                A Incorporadora <span>Área Incrível</span> é a única empresa do
                mercado que oferece a Garantia de Entrega, um documento de
                certificação registrado em cartório, com validade de contrato,
                que garante a entrega do imóvel dentro do prazo previsto sob
                pena de multa. É uma certificação inovadora que protege seu
                investimento, seus sonhos e sua família.
              </p>
            </Text>
            <Button>Ver documento!</Button>
          </RightContent>
        </ContentGarantia>
      </Content>
      <Security>
        <img src="security.svg" alt="" />
      </Security>
    </Container>
  );
}
