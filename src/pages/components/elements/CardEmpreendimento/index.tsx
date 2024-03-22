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
  linkButton?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  list,
  type,
  linkButton,
}: CardEmpreendimentoProps) {
  const theme = useTheme();
  return (
    <Container type={type}>
      <ContentHeader theme={theme}>
        <h2>{title}</h2>
      </ContentHeader>
      <Content>
        <ContentTextInfo>
          <span>parcelas mensais a partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE ESSA OPÇÃO</p>
        </ContentTextInfo>
        <Divider theme={theme} />
        {list}
      </Content>
      <ContentButton>
        <ButtonCard href={linkButton} theme={theme}>
          Quero esse!
        </ButtonCard>
      </ContentButton>
    </Container>
  );
}
