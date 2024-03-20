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
            list={
              <List>
                <ListItem>
                  <span>•</span> 2 quartos, 1 suite, sala, cozinha aberta e
                  ampla área de lazer/lavanderia
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
            list={
              <List>
                <ListItem>
                  <span>•</span> 3 quartos, 1 suite, sala, cozinha conceito
                  aberto e ampla área de lazer/lavanderia
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
        <img src="family2.png" alt="" />
      </Image>
    </Container>
  );
}
