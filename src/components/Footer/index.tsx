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
import { Link } from "react-scroll";

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
            <a href="https://www.facebook.com/area.incrivelrc">
              <Facebook size={20} color="#ffffff" strokeWidth={1.75} />
            </a>
            <a href="https://www.instagram.com/area.incrivel/">
              <Instagram size={20} color="#ffffff" strokeWidth={1.75} />
            </a>
            {/* <Youtube size={20} color="#ffffff" strokeWidth={1.75} /> */}
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
              <Link to="home" href="/" smooth={true} duration={500}>
                <Item>Home</Item>
              </Link>
              <Link
                to="numeros"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Nossos números</Item>
              </Link>
              <Link
                to="apresentacao"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Apresentação</Item>
              </Link>
              <Link
                to="empreendimentos"
                href="/"
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <Item>Empreendimentos</Item>
              </Link>

              <Link
                to="depoimentos"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Depoimentos</Item>
              </Link>
              <Link
                to="parceiras"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Empresas parceiras</Item>
              </Link>
              <Link
                to="redes"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Redes Sociais</Item>
              </Link>
              <Link
                to="porquearea"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Por que a Área?</Item>
              </Link>
              <Link
                to="garantia"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              ></Link>
              <Item>Garantia de Entrega</Item>
              <Link
                to="grupo"
                href="/"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Item>Grupo MNGT</Item>
              </Link>
            </Items>
          </Slice>
        </ItemContent>
        <ItemContent>
          <Slice>
            <Title>Fale conosco</Title>
            <Items>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
              >
                <Item>WhatsApp</Item>
              </a>
              <a href="mailto:">
                <Item>E-mail</Item>
              </a>
              <a
                href="https://www.instagram.com/area.incrivel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Item>Instagram</Item>
              </a>
              <a
                href="https://www.facebook.com/area.incrivelrc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Item>Facebook</Item>
              </a>
              <a
                href="https://www.linkedin.com/company/grupomngt/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Item>LinkedIn</Item>
              </a>
            </Items>
          </Slice>
        </ItemContent>
      </Content>
    </Container>
  );
}
