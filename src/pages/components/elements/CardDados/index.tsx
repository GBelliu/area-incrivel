import { ReactNode } from "react";

import { Container, Data, Icon, Title } from "./styles";
import { useTheme } from "../../../ThemeContext";

interface CardDadosProps {
  icon?: ReactNode;
  title?: string;
  data?: string;
}

export function CardDados({ icon, title, data }: CardDadosProps) {
  const theme = useTheme();
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Data theme={theme}>{data}</Data>
    </Container>
  );
}
