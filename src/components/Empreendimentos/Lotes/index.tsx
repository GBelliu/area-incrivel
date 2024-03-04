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
            title="casas tipo 1"
            preco="R$ 200.000"
            list={
              <List>
                <ListItem>
                  <span>•</span> Item 1
                </ListItem>
                <ListItem>
                  <span>•</span> Item 2
                </ListItem>
                <ListItem>
                  <span>•</span> Item 3
                </ListItem>
                <ListItem>
                  <span>•</span> Item 4
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas tipo 1"
            preco="R$ 200.000"
            list={
              <List>
                <ListItem>
                  <span>•</span> Item 1
                </ListItem>
                <ListItem>
                  <span>•</span> Item 2
                </ListItem>
                <ListItem>
                  <span>•</span> Item 3
                </ListItem>
                <ListItem>
                  <span>•</span> Item 4
                </ListItem>
              </List>
            }
          />
        </ContentCards>
      </Content>
      <Image>
        <img src="svglotes.svg" alt="" />
      </Image>
    </Container>
  );
}
