import { ReactNode } from "react";

import { Container, Icon, Title } from "./styles";
import { useTheme } from "../../../ThemeContext";

interface CardPontosProps {
  icon?: ReactNode | string;
  title?: string;
}

export function CardPontos({ icon, title }: CardPontosProps) {
  const theme = useTheme();
  return (
    <Container>
      <Icon theme={theme}>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  );
}
