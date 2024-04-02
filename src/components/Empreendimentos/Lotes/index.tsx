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
          <CardEmpreendimento
            title="LOTES DE 105m²"
            preco="R$583,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20lotes%20de%20105m%C2%B2"
          />
          <CardEmpreendimento
            title="LOTES DE 120m²"
            preco="R$665,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20lotes%20de%20120m%C2%B2"
          />
        </ContentCards>
      </Content>
      <Image>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1712079247/loteimg_uo0oqf.png"
          alt=""
        />
      </Image>
    </Container>
  );
}
