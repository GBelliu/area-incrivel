import { ReactNode } from "react";

import { Container, Content, ContentCards, Image } from "./styles";
import { CardEmpreendimento } from "../../elements/CardEmpreendimento";

import { List, ListItem } from "../../elements/CardEmpreendimento/styles";

export function CasasModulares() {
  return (
    <Container>
      <Content>
        <h1>
          Casas mo<span>dulares</span>
        </h1>
        <ContentCards>
          <CardEmpreendimento
            title="casas de 24m2"
            preco="R$641,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2024m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 1 quarto, 1 banheiro e cozinha
                </ListItem>
                <ListItem>
                  <span>•</span> 24m² de construção
                </ListItem>
                <ListItem>
                  <span>•</span> Estrutura preparada para ampliação
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas de 36m2"
            preco="R$740,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2036m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 2 quartos, 1 banheiro, cozinha, sala
                </ListItem>
                <ListItem>
                  <span>•</span> 36m² de construção
                </ListItem>
                <ListItem>
                  <span>•</span> Estrutura preparada para ampliação
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas de 48m2"
            preco="R$927,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2048m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 2 quartos, uma suíte, 1 banheiro, cozinha, sala
                </ListItem>
                <ListItem>
                  <span>•</span> 48m² de construção
                </ListItem>
                <ListItem>
                  <span>•</span> Estrutura preparada para ampliação
                </ListItem>
              </List>
            }
          />
          <CardEmpreendimento
            title="casas de 55m2"
            preco="R$1.127,00"
            linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20casas%20modulares%20de%2055m%C2%B2"
            list={
              <List>
                <ListItem>
                  <span>•</span> 3 quartos, uma suíte, 1 banheiro, cozinha, sala
                </ListItem>
                <ListItem>
                  <span>•</span> 55m² de construção
                </ListItem>
                <ListItem>
                  <span>•</span> Estrutura preparada para ampliação
                </ListItem>
              </List>
            }
          />
        </ContentCards>
      </Content>
      <Image>
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492200/public/family_e0bzfz.png"
          alt=""
        />
      </Image>
    </Container>
  );
}
