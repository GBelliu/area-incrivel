import { ReactNode } from "react";

<<<<<<< HEAD
import { Container, Content } from "./styles";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";

=======
import { Container, Content, ContentCards } from "./styles";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";

import { List, ListItem } from "../elements/CardEmpreendimento/styles";

>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
export function Casas() {
  return (
    <Container>
      <Content>
<<<<<<< HEAD
        <h1>Casas</h1>
        <CardEmpreendimento />
=======
        <h1>
          Casas in<span>críveis</span>
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
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
      </Content>
    </Container>
  );
}
