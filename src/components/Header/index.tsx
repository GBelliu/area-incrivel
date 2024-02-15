import { ReactNode, useState } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import { Container, Content } from "./styles";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <Container>
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
            Sobre
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Produtos
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Contato
          </Link>
        </Menu>
      </Content>
    </Container>
  );
}
