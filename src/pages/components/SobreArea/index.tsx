import { ReactNode } from "react";

import { Abouts, Button, Container, Content } from "./styles";
import { AboutItemLeft } from "../../../components/elements/AboutItemLeft";
import { AboutItemRight } from "../../../components/elements/AboutItemRight";

interface SobreAreaProps {
  children: ReactNode;
}

export function SobreArea() {
  return (
    <Container>
      <Content>
        <h1>Por que a Área Incrível?</h1>
        <Abouts>
          <AboutItemLeft
            number="1"
            title="Experiência comprovada"
            paragraph="mais de 20 anos de experiência em construção civil sempre entregando antes do prazo, tendo os clientes superexigentes, como a Whirlpool, a Nestlé, o Grupo CBB, entre outros."
          ></AboutItemLeft>
          <AboutItemRight
            number="2"
            title="Solidez financeira"
            paragraph="a Área Incrível faz parte do Grupo MNGT, que possui índice de endividamento inferior a 10% do seu patrimônio."
          ></AboutItemRight>
          <AboutItemLeft
            number="3"
            title="Independência financeira"
            paragraph="a Área Incrível não depende do dinheiro da Caixa Econômica Federal para construir e entregar seus empreendimentos."
          ></AboutItemLeft>
          <AboutItemRight
            number="4"
            title="Focada em Rio Claro"
            paragraph="diferente de outras construtoras que apostam em várias regiões, a Área Incrível tem um plano de 10 anos focado na cidade de Rio Claro."
          ></AboutItemRight>
          <AboutItemLeft
            number="5"
            title="Equipe altamente especializada e qualificada"
            paragraph="nossas pessoas já atuam há anos com incorporação imobiliária e construção. Não somos aventureiros!"
          ></AboutItemLeft>
          <AboutItemRight
            number="6"
            title="Parcerias incríveis"
            paragraph="não nos contentamos apenas em entregar os empreendimentos, queremos facilitar a vida de nossos clientes por meio de parcerias incríveis com estabelecimentos e comércios locais, que possam gerar benefícios financeiros diretos aos nossos clientes."
          ></AboutItemRight>
        </Abouts>
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Quero saber mais sobre a Área Incrível</Button>
        </a>
      </Content>
    </Container>
  );
}
