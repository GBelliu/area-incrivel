import { ReactNode } from "react";

import { Container, Content, ContentCards, Image } from "./styles";
import { CardEmpreendimento } from "../../elements/CardEmpreendimento";

import { List, ListItem } from "../../elements/CardEmpreendimento/styles";

export function Plantas() {
  return (
    <Container>
      <Content>
        <h1>
          Casas in<span>críveis</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento
            title={
              <h2>
                CASAS DE 52<span>m²</span>
              </h2>
            }
            preco="R$1.047,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20de%2050m%C2%B2"
            img="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086280/casade52_lpf4hn.png"
            imgModal="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086181/casa52_nmfozf.png"
          />
          <CardEmpreendimento
            title={
              <h2>
                CASAS DE 60<span>m²</span>
              </h2>
            }
            preco="R$1.238,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20de%2060m%C2%B2"
            img="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086279/casade60_sa1n9t.png"
            imgModal="https://res.cloudinary.com/duv6mjghr/image/upload/v1712086182/casa60_yy2kyl.png"
          />
        </ContentCards>
      </Content>
      <Image>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492202/public/family2_wgvr3b.png"
          alt=""
        />
      </Image>
    </Container>
  );
}
