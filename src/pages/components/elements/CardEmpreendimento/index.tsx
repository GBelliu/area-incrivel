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
import { useTheme } from "../../../ThemeContext";

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
  const theme = useTheme();
  return (
    <Container type={type}>
      <ContentHeader theme={theme}>
        <h2>{title}</h2>
      </ContentHeader>
      <Content>
        <ContentTextInfo>
          <span>á partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE OS EMPREENDIMENTOS</p>
        </ContentTextInfo>
        <Divider theme={theme} />
        {list}
      </Content>
      <ContentButton>
        <ButtonCard theme={theme}>Quero esse!</ButtonCard>
      </ContentButton>
    </Container>
  );
}
