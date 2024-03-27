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
    <Container>
      <Content>
        <h1>Garantia de entrega</h1>
        <ContentGarantia>
          <LeftContent>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492542/public/garantiaimg_qycxvm.jpg"
              alt=""
            />
          </LeftContent>
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
            {/* <Button>Ver documento!</Button> */}
          </RightContent>
        </ContentGarantia>
      </Content>
      <Security>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492209/public/graydec_u1iwzv.svg"
          alt=""
        />
      </Security>
    </Container>
  );
}
