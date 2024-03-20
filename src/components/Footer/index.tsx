import { ReactNode } from "react";

import {
  Container,
  Content,
  Item,
  ItemContent,
  Items,
  LeftContent,
  Slice,
  SocialItems,
  Title,
} from "./styles";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <img src="logocinza.png" alt="" />
          <p>
            Somos a Área Incrível, uma incorporadora que desenvolve, administra
            e comercializa todas as etapas de um projeto.
          </p>
          <SocialItems>
            <Facebook size={20} color="#ffffff" strokeWidth={1.75} />
            <Instagram size={20} color="#ffffff" strokeWidth={1.75} />
            <Youtube size={20} color="#ffffff" strokeWidth={1.75} />
          </SocialItems>
        </LeftContent>
        <ItemContent>
          {/* <Slice>
            <Title>Nossos Imóveis</Title>
            <Items>
              <Item>Di Napoli I</Item>
              <Item>Di Napoli II</Item>
              <Item>Siena</Item>
              <Item>Ravena</Item>
            </Items>
          </Slice> */}
          <Slice>
            <Title>Área Incrível</Title>
            <Items>
              <Item>Home</Item>
              <Item>Nossos números</Item>
              <Item>Apresentação</Item>
              <Item>Lotes</Item>
              <Item>Casas Modulares</Item>
              <Item>Casas</Item>
              <Item>Depoimentos</Item>
              <Item>Empresas parceiras</Item>
              <Item>Redes Sociais</Item>
              <Item>Por que a Área?</Item>
              <Item>Garantia de Entrega</Item>
              <Item>Grupo MNGT</Item>
            </Items>
          </Slice>
        </ItemContent>
        <ItemContent>
          <Slice>
            <Title>Fale com um corretor</Title>
            <Items>
              <Item>WhatsApp</Item>
              <Item>E-mail</Item>
            </Items>
          </Slice>
          <Slice>
            <Title>Fale conosco</Title>
            <Items>
              <Item>Site</Item>
              <Item>WhatsApp</Item>
              <Item>E-mail</Item>
              <Item>Instagram</Item>
              <Item>Facebook</Item>
              <Item>LinkedIn</Item>
            </Items>
          </Slice>
        </ItemContent>
      </Content>
    </Container>
  );
}
