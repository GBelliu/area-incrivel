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
  linkButton?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  list,
  type,
  linkButton,
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
        <ButtonCard href={linkButton} target="_blank">
          Tenho interesse
        </ButtonCard>
      </ContentButton>
    </Container>
  );
}
