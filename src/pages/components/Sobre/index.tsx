import { ReactNode } from "react";

import { ButtonAbout, Container, Content } from "./styles";
import { useTheme } from "../../ThemeContext";

interface SobreProps {
  logoEmpreendimento?: string;
  about?: string;
  linkButton?: string;
}

export function Sobre({ logoEmpreendimento, about, linkButton }: SobreProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <img src={logoEmpreendimento} alt="" />
        <p>{about}</p>
        <ButtonAbout href={linkButton} target="_blank" theme={theme}>
          Simular agora
        </ButtonAbout>
      </Content>
    </Container>
  );
}
