import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentGarantia,
  LeftContent,
  RightContent,
  Text,
} from "./styles";

export function Garantia() {
  return (
    <Container>
      <Content>
        <h1>Garantia de entrega</h1>
        <ContentGarantia>
          <LeftContent></LeftContent>
          <RightContent>
            <Text>
              <p>
                A <span>Área Incrível</span> é uma empresa do Grupo MNGT Brasil,
                que há mais de 30 anos investe em Rio Claro e sua comunidade
                apoiando o potencial do município e participando de seu
                crescimento e desenvolvimento econômico, social e cultural.
              </p>
              <p>
                O Grupo reúne empresas dos setores de logística, segurança,
                construção civil, energias limpas, automação e tecnologia.
              </p>
            </Text>
            <Button>Visitar site!</Button>
          </RightContent>
        </ContentGarantia>
      </Content>
    </Container>
  );
}
