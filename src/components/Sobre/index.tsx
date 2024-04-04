import { ReactNode } from "react";

import { Abouts, Button, Container, Content } from "./styles";
import { AboutItemLeft } from "../elements/AboutItemLeft";
import { AboutItemRight } from "../elements/AboutItemRight";

interface SobreProps {
  children: ReactNode;
}

export function Sobre() {
  return (
    <Container id="porquearea">
      <Content>
        <h1>Por que a Área Incrível?</h1>
        <p>
          A Área Incrível, empresa do Grupo MNGT, é uma incorporadora
          especializada na escuta ativa dos clientes, criando e entregando casas
          exatamentes como as pessoas querem. Apenas em 2024 serão entregues
          mais de 300 moradias incríveis.
        </p>
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
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20%C3%81rea%20Incr%C3%ADvel!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Falar com um consultor incrível</Button>
        </a>
      </Content>
    </Container>
  );
}
