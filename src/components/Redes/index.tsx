import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  FacebookContent,
  Icon,
  Text,
  InstagramContent,
  TextContent,
} from "./styles";

export function Redes() {
  return (
    <Container>
      <Content>
        <h1>Confira nossas redes!</h1>
        <InstagramContent>
          <img src="insta.png" alt="" />
          <TextContent>
            <Icon>
              <img src="./instalogo.png" alt="" />
            </Icon>
            <Text>
              <h2>Instagram - @area.incrivel</h2>
              <p>
                Siga nosso instagram e fique por dentro das novidades dos nossos
                empreendimentos e do mercado imobiliário.
              </p>
            </Text>
            <Button>Ver perfil</Button>
          </TextContent>
        </InstagramContent>
        <FacebookContent>
          <TextContent>
            <Icon>
              <img src="facelogo.png" alt="" />
            </Icon>
            <Text>
              <h2>Instagram - @area.incrivel</h2>
              <p>
                Siga nosso instagram e fique por dentro das novidades dos nossos
                empreendimentos e do mercado imobiliário.
              </p>
            </Text>
            <Button rede="face">Ver perfil</Button>
          </TextContent>
          <img src="face.png" alt="" />
        </FacebookContent>
      </Content>
    </Container>
  );
}
