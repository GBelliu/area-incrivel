import { ReactNode } from "react";

import { Button, Container, Content, Content3D } from "./styles";
import { useTheme } from "../../ThemeContext";

interface ExploreProps {
  empreendimento?: string;
  iframe: ReactNode;
}

export function Explore({ empreendimento, iframe }: ExploreProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content theme={theme}>
        <h1>
          Explore o decorado do <span>{empreendimento}</span>
        </h1>
        <Content3D>{iframe}</Content3D>
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
          target="_blank"
        >
          <Button theme={theme}>Quero conhecer mais</Button>
        </a>
      </Content>
    </Container>
  );
}
