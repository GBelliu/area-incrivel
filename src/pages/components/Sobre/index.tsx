import { ReactNode } from "react";

import { ButtonAbout, Container, Content } from "./styles";
import { useTheme } from "../../ThemeContext";

interface SobreProps {
  logoEmpreendimento?: string;
  about?: string;
}

export function Sobre({ logoEmpreendimento, about }: SobreProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <img src={logoEmpreendimento} alt="" />
        <p>{about}</p>
        <ButtonAbout theme={theme}>Simular agora</ButtonAbout>
      </Content>
    </Container>
  );
}
