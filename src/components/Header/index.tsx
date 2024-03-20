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
          <img src="./logocinza.png" alt="" />
        </a>
        <Menu
          right
          className="menuBox"
          isOpen={isOpenMenu}
          onOpen={() => setIsOpenMenu(true)}
          onClose={() => setIsOpenMenu(false)}
        >
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Nossos números
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Apresentação
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Lotes
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Casas Modulares
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Casas
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Depoimentos
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Empresas parceiras
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Redes Sociais
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Por que a Área?
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Garantia de Entrega
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Grupo MNGT
          </Link>
          <ButtonHeader>Fale conosco!</ButtonHeader>
        </Menu>
      </Content>
    </Container>
  );
}
