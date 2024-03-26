import { ReactNode } from "react";

import { Container, Content, ContentCards, Image } from "./styles";
import { CardEmpreendimento } from "../../elements/CardEmpreendimento";

import { List, ListItem } from "../../elements/CardEmpreendimento/styles";

export function Lotes() {
  return (
    <Container>
      <Content>
        <h1>
          Lotes in<span>críveis</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento title="lotes de 105m2" preco="R$641,00" />
          <CardEmpreendimento title="lotes de 120m2" preco="R$732,00" />
        </ContentCards>
      </Content>
      <Image>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492242/public/lote_rbkbxn.png"
          alt=""
        />
      </Image>
    </Container>
  );
}
