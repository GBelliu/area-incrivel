import { ReactNode } from "react";

import {
  ButtonCard,
  Container,
  Content,
  ContentButton,
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
          <span>parcelas mensais a partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE AS OPÇÕES</p>
        </ContentTextInfo>
        <Divider />
        {list}
      </Content>
      <ContentButton>
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
          target="_blank"
        >
          <ButtonCard>Tenho interesse</ButtonCard>
        </a>
      </ContentButton>
    </Container>
  );
}
