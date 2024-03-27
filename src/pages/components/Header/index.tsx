import { ReactNode, useState } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { ButtonHeader, Container, Content } from "./styles";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <Container background={color}>
      <Content>
        <a href="/">
          <img
            src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492229/public/logocinza_cqnkti.png"
            alt=""
          />
        </a>
        <Menu
          right
          className="menuBox"
          isOpen={isOpenMenu}
          onOpen={() => setIsOpenMenu(true)}
          onClose={() => setIsOpenMenu(false)}
        >
          <Link to="home" href="/" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
          <Link
            to="numeros"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Nossos números
          </Link>
          <Link to="sobre" href="/" smooth={true} duration={500} offset={-100}>
            Sobre
          </Link>
          <Link
            to="empreendimento"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Empreendimento
          </Link>
          <Link
            to="ofertas"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Ofertas
          </Link>
          <Link
            to="parceiras"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Empresas parceiras
          </Link>
          <Link
            to="estagio"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Estágio da Obra
          </Link>
          <Link
            to="garantia"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Garantia de Entrega
          </Link>
          <Link
            to="depoimentos"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Depoimentos
          </Link>
          <Link
            to="imagens"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Imagens
          </Link>
          <Link to="pontos" href="/" smooth={true} duration={500} offset={-100}>
            Pontos da Região
          </Link>

          <Link
            to="porquearea"
            href="/"
            smooth={true}
            duration={500}
            offset={-100}
          >
            Por que a Área?
          </Link>
          <Link to="redes" href="/" smooth={true} duration={500} offset={-100}>
            Redes Sociais
          </Link>
          <Link to="grupo" href="/" smooth={true} duration={500} offset={-100}>
            Grupo MNGT
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonHeader>Fale conosco!</ButtonHeader>
          </a>
        </Menu>
      </Content>
    </Container>
  );
}
