import { ReactNode } from "react";

import { Container, Content, ContentCards, Image } from "./styles";
import { CardEmpreendimento } from "../../elements/CardEmpreendimento";

import { List, ListItem } from "../../elements/CardEmpreendimento/styles";

export function Plantas() {
  return (
    <Container>
      <Content>
        <h1>
          Plantas in<span>críveis</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento
            title="casas - 50m2"
            preco="R$1030,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20de%2050m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 2 quartos, uma suíte, sala e cozinha em
                  conceito aberto e ampla área de lazer/lavanderia
                </ListItem>
                <ListItem>
                  <span>•</span> Vários ambientes, permitindo adaptações
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas - 60m2"
            preco="R$1226,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20de%2060m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 3 quartos, uma suíte, sala e cozinha em
                  conceito aberto e ampla área de lazer/lavanderia
                </ListItem>
                <ListItem>
                  <span>•</span> Projeto potencializa o uso do lote, focando no
                  conforto
                </ListItem>
              </List>
            }
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
