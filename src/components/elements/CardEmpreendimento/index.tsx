import { ReactNode } from "react";

<<<<<<< HEAD
import { Container, ContentHeader } from "./styles";

// interface CardEmpreendimentoProps {
//   children: ReactNode;
// }

export function CardEmpreendimento() {
  return (
    <Container>
      <ContentHeader>
        <h3>CASA TIPO 1</h3>
      </ContentHeader>
=======
import {
  ButtonCard,
  Container,
  Content,
  ContentHeader,
  ContentTextInfo,
  Divider,
} from "./styles";

interface CardEmpreendimentoProps {
  title?: string;
  preco?: string;
  list?: ReactNode;
  type?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  list,
  type,
}: CardEmpreendimentoProps) {
  return (
    <Container type={type}>
      <ContentHeader>
        <h2>{title}</h2>
      </ContentHeader>
      <Content>
        <ContentTextInfo>
          <span>á partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE OS EMPREENDIMENTOS</p>
        </ContentTextInfo>
        <Divider />
        {list}
      </Content>
      <ButtonCard>Tenho interesse</ButtonCard>
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
    </Container>
  );
}
