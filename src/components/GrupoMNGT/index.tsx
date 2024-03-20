import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  LeftContent,
  RightContent,
  Text,
} from "./styles";

export function GrupoMNGT() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <img src="logogrupo.png" alt="" />
          <Text>
            <p>
              Com mais de 20 anos em Rio Claro, construímos vidas, histórias,
              galpões e casas, além de fazer parte do presente e do futuro de
              mais de 200 colaboradores e parceiros. Nossa missão é oferecer
              negócios e serviços inovadores na construção, incorporação,
              logística, segurança e tecnologias de energia limpa e automação.
            </p>
          </Text>
          <Button>Visitar site!</Button>
        </LeftContent>
        <RightContent>
          
        </RightContent>
      </Content>
    </Container>
  );
}
